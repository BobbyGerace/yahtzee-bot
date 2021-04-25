import Game from './game-model.js';
import { diceToCounts } from './helpers.js';
import { CategoryName } from './player-score-card.js';

const noop = () => {};

declare global {
    interface Window {
        BOT_DELAY: number;
        worker: Worker;
    }
}
// Allow adjustment from the console
console.log('Adjust window.BOT_DELAY to change bot speed');
window.BOT_DELAY = 1000;

type CacheLoadedListener = () => void;
type RollRequestedListener = (fromBot?: boolean) => void;
type CategorySelectedListener = (category: CategoryName, fromBot?: boolean) => void;
type KeepToggleListener = (diceIndex: number, fromBot?: boolean) => void;
type ActionMessageListener = (msg: string) => void;

export default class Bot {
    gameId = 0;
    latestRoll = [1, 1, 1, 1, 1];
    latestKeeps = [false, false, false, false, false];
    cacheLoadedListener: CacheLoadedListener = noop;
    rollRequestedListener: RollRequestedListener = noop;
    categorySelectedListener: CategorySelectedListener = noop;
    keepToggleListener: KeepToggleListener = noop;
    actionMessageListener: ActionMessageListener = noop;
    worker = new Worker('js/worker.js');

    futureAction = new FutureAction();

    choiceRequestTime = 0;

    constructor() {
        this.worker.onmessage = (e) => {
            this.handleMessage(e.data);
        }

        window.worker = this.worker
    }

    setNewGame() {
        this.gameId++;
        this.futureAction.clear();
    }

    bindCacheLoaded(fn: CacheLoadedListener) {
        this.cacheLoadedListener = fn;
    }

    bindRollClicked(fn: RollRequestedListener) {
        this.rollRequestedListener = fn;
    }

    bindCategorySelect(fn: CategorySelectedListener) {
        this.categorySelectedListener = fn;
    }

    bindKeepToggle(fn: KeepToggleListener) {
        this.keepToggleListener = fn;
    }

    bindActionMessage(fn: ActionMessageListener) {
        this.actionMessageListener = fn;
    }

    makeChoice(model: Game) {
        this.latestRoll = model.dice;
        this.latestKeeps = model.keeps;
        this.choiceRequestTime = Date.now();

        const roll = diceToCounts(model.dice);
        const rollsLeft = model.rollsLeft;
        const openCategories = model.getPotentialScores()
            .map(([categoryName]) => categoryName);
        const upperScore = model.currentPlayer().getUpperTotal();
        const yahtzeeBonusAvailable = model.currentPlayer().categories.yahtzee === 50;

        if (rollsLeft === 3) return this.withBotDelay(
            () => this.rollRequestedListener(true)
        );

        const message = {
            action: 'choose',
            roll,
            rollsLeft,
            openCategories,
            upperScore,
            yahtzeeBonusAvailable,
            gameId: this.gameId
        };

        this.worker.postMessage(message);
    }

    handleMessage(data: BotMessage) {
        // Make sure to ignore messages queued up from previous games
        if (data.message !== 'cacheLoaded' && data.gameId !== this.gameId) return;

        console.log('messageReceived', data)
        switch(data.message) {
            case 'cacheLoaded':
                this.cacheLoadedListener();
                break;
            case 'keep':
                this.withBotDelay(() => {
                    this.doKeeps(data.value);
                }, 3);
                const dice = sumKeeps(data.value)
                const word = dice === 1 ? 'die' : 'dice';
                this.actionMessageListener(`Keeping ${dice} ${word}`)
                break;
            case 'category':
                this.actionMessageListener(
                    `Choosing category: ${mapCategoryToLabel(data.value)}`
                );
                this.withBotDelay(() => {
                    this.categorySelectedListener(data.value, true);
                }, 3);
                break;
            default:
                break;
        }
    }

    doKeeps(keeps: number[], dice = this.latestRoll, idx = 0) {
        // Keep one dice at a time
        const [thisDie, ...rest] = dice;
        const keepIdx = thisDie - 1;

        // If it's empty then roll
        if (typeof thisDie === 'undefined') {
            this.futureAction.set(() => this.rollRequestedListener(true), this.getBotDelay() * 0.7);
        }

        // If we need to keep it and it's not already kept
        else if (keeps[keepIdx] > 0 && !this.latestKeeps[idx]) {
            this.keepToggleListener(idx, true);
            const newKeeps = [...keeps];
            newKeeps[keepIdx]--;

            this.futureAction.set(() => this.doKeeps(newKeeps, rest, idx + 1), this.getBotDelay() * 0.7);
        }
        // If we need to keep it and it's already kept
        else if (keeps[keepIdx] > 0 && this.latestKeeps[idx]) {
            const newKeeps = [...keeps];
            newKeeps[keepIdx]--;
            this.doKeeps(newKeeps, rest, idx + 1);
        }
        // If we don't need to keep it and it is already kept
        else if (keeps[keepIdx] === 0 && this.latestKeeps[idx]) {
            this.keepToggleListener(idx, true);
            const newKeeps = [...keeps];

            this.futureAction.set(() => this.doKeeps(newKeeps, rest, idx + 1), this.getBotDelay() * 0.7);
            return
        }
        // Otherwise proceed immeditely to the next one
        else this.doKeeps(keeps, rest, idx + 1);
    }

    withBotDelay(fn: () => void, multiplier = 1) {
        const targetTime = this.getBotDelay() * multiplier + this.choiceRequestTime;
        const now = Date.now();
        const timeOut = Math.max(targetTime - now, 0);

        this.futureAction.set(fn, timeOut);
    }

    getBotDelay() {
        return window.BOT_DELAY;
    }
}

/**
 * A small class to manage multiple simultaneous setTimeout states
 */
class FutureAction {
    private timeouts = new Set<number>();

    set(fn: () => void, wait = 0) {
        const timeout = setTimeout(() => {
            fn();
            this.timeouts.delete(timeout);
        }, wait);

        this.timeouts.add(timeout);
    }

    clear() {
        this.timeouts.forEach(t => clearTimeout(t));
        this.timeouts.clear();
    }
}

const mapCategoryToLabel = (name: CategoryName) => {
    return {
        '1': 'Upper One',
        '2': 'Upper Two',
        '3': 'Upper Three',
        '4': 'Upper Four',
        '5': 'Upper Five',
        '6': 'Upper Six',
        'threeOfAKind': 'Three of a Kind',
        'fourOfAKind': 'Four of a Kind',
        'fullHouse': 'Full House',
        'smallStraight': 'Small Straight',
        'largeStraight': 'Large Straight',
        'yahtzee': 'Yahtzee',
        'chance': 'Chance',
    }[name];
}

const sumKeeps = (keeps: number[]) => keeps.reduce((a, b) => a + b, 0);

type BotMessage =
    | { message: 'cacheLoaded' }
    | { message: 'keep', value: number[], gameId: number  }
    | { message: 'category', value: CategoryName, gameId: number  };
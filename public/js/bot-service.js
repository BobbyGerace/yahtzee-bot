import { diceToCounts } from './helpers.js';

const noop = () => {};
const BOT_DELAY = 1000;

// TODO - Clean up bot timing stuff
// TODO - Add game over view
// TODO - Add back button

export default class Bot {
    constructor() {
        this.latestRoll = [1, 1, 1, 1, 1];
        this.latestKeeps = [false, false, false, false, false];
        this.cacheLoadedListener = noop;
        this.rollRequestedListener = noop;
        this.categorySelectedListener = noop;
        this.keepToggleListener = noop;
        this.actionMessageListener = noop;

        this.targetActionTime = 0;

        this.worker = new Worker('js/worker.js');

        this.worker.onmessage = (e) => {
            this.handleMessage(e.data);
        }

        window.worker = this.worker
    }

    bindCacheLoaded(fn) {
        this.cacheLoadedListener = fn;
    }

    bindRollClicked(fn) {
        this.rollRequestedListener = fn;
    }

    bindCategorySelect(fn) {
        this.categorySelectedListener = fn;
    }

    bindKeepToggle(fn) {
        this.keepToggleListener = fn;
    }

    bindActionMessage(fn) {
        this.actionMessageListener = fn;
    }

    makeChoice(model) {
        this.latestRoll = model.dice;
        this.latestKeeps = model.keeps;
        this.targetActionTime = Date.now() + this.getBotDelay() * 2;

        const roll = diceToCounts(model.dice);
        const rollsLeft = model.rollsLeft;
        const openCategories = model.getPotentialScores()
            .map(([categoryName]) => categoryName);
        const upperScore = model.currentPlayer().getUpperTotal();
        const yahtzeeBonusAvailable = model.currentPlayer().categories.yahtzee === 50;

        if (rollsLeft === 3) return this.atTargetTime(
            () => this.rollRequestedListener(true)
        );

        const message = {
            action: 'choose',
            roll,
            rollsLeft,
            openCategories,
            upperScore,
            yahtzeeBonusAvailable,
        };

        this.worker.postMessage(message);
    }

    handleMessage(data) {
        switch(data.message) {
            case 'cacheLoaded':
                this.cacheLoadedListener();
                break;
            case 'keep':
                this.atTargetTime(() => {
                    this.doKeeps(data.value);
                });
                const dice = sumKeeps(data.value)
                const word = dice === 1 ? 'die' : 'dice';
                this.actionMessageListener(`Keeping ${dice} ${word}`)
                break;
            case 'category':
                this.actionMessageListener(
                    `Choosing category: ${mapCategoryToLabel(data.value)}`
                );
                this.atTargetTime(() => {
                    this.categorySelectedListener(data.value, true);
                });
                break;
            default:
                break;
        }
    }

    doKeeps(keeps, dice = this.latestRoll, idx = 0) {
        // Keep one dice at a time
        const [thisDie, ...rest] = dice;
        const keepIdx = thisDie - 1;

        // If it's empty then roll
        if (typeof thisDie === 'undefined') {
            this.rollRequestedListener(true);
        }

        // If we need to keep it and it's not already kept
        else if (keeps[keepIdx] > 0 && !this.latestKeeps[idx]) {
            this.keepToggleListener(idx, true);
            const newKeeps = [...keeps];
            newKeeps[keepIdx]--;

            setTimeout(() => this.doKeeps(newKeeps, rest, idx + 1), this.getBotDelay());
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

            setTimeout(() => this.doKeeps(newKeeps, rest, idx + 1), this.getBotDelay());
            return
        }
        // Otherwise proceed immeditely to the next one
        else this.doKeeps(keeps, rest, idx + 1);
    }

    atTargetTime(fn) {
        const now = Date.now();
        if (now > this.targetActionTime) fn();
        else setTimeout(fn, this.targetActionTime - now);
    }

    getBotDelay() {
        const multiplier = document.querySelector('#bot-speed').value;
 
        return isNaN(multiplier) ? BOT_DELAY : BOT_DELAY * multiplier;
    }
}

const mapCategoryToLabel = (name) => {
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

const sumKeeps = (keeps) => keeps.reduce((a, b) => a + b, 0);
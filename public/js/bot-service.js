import { diceToCounts } from './helpers.js';

const noop = () => {};
const BOT_DELAY = 1000;

// TODO - Clean up bot timing stuff
// TODO - Add game over view
// TODO - Add back button

export default class Bot {
    constructor() {
        this.latestRoll = [1, 1, 1, 1, 1];
        this.cacheLoadedListener = noop;
        this.rollRequestedListener = noop;
        this.categorySelectedListener = noop;
        this.keepToggleListener = noop;
        this.actionMessageListener = noop;

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

        const roll = diceToCounts(model.dice);
        const rollsLeft = model.rollsLeft;
        const openCategories = model.getPotentialScores()
            .map(([categoryName]) => categoryName);
        const upperScore = model.currentPlayer().getUpperTotal();
        const yahtzeeBonusAvailable = model.currentPlayer().categories.yahtzee === 50;

        setTimeout(() => {
            if (rollsLeft === 3) return this.rollRequestedListener(true);

            const message = {
                action: 'choose',
                roll,
                rollsLeft,
                openCategories,
                upperScore,
                yahtzeeBonusAvailable,
            };

            this.worker.postMessage(message);
        }, BOT_DELAY)
    }

    handleMessage(data) {
        switch(data.message) {
            case 'cacheLoaded':
                this.cacheLoadedListener();
                break;
            case 'keep':
                this.doKeeps(data.value);
                const dice = sumKeeps(data.value)
                const word = dice === 1 ? 'die' : 'dice';
                this.actionMessageListener(`Keeping ${dice} ${word}`)
                break;
            case 'category':
                this.actionMessageListener(
                    `Choosing category: ${mapCategoryToLabel(data.value)}`
                );
                setTimeout(() => {
                    this.categorySelectedListener(data.value, true);
                }, BOT_DELAY * 2)
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
            return;
        }

        if (keeps[keepIdx] > 0) {
            this.keepToggleListener(idx, true);
            const newKeeps = [...keeps];
            newKeeps[keepIdx]--;

            // If we want to keep this one then wait a second
            setTimeout(() => this.doKeeps(newKeeps, rest, idx + 1), BOT_DELAY);
            return
        }

        // Otherwise proceed immeditely to the next one
        this.doKeeps(keeps, rest, idx + 1);
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
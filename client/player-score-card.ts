import { diceToCounts } from './helpers.js';
import { Dice, DiceCounts } from './types';

const isYahtzee = (d: number) => d === 5;

const upperCategories = [1, 2, 3, 4, 5, 6] as const;
const lowerCategories = [
    'threeOfAKind',
    'fourOfAKind',
    'fullHouse',
    'smallStraight',
    'largeStraight',
    'yahtzee',
    'chance',
] as const;

type UpperCategory = (typeof upperCategories)[number];
type LowerCategory = (typeof lowerCategories)[number];
export type CategoryName = UpperCategory | LowerCategory;

type CategoryList = {
    [C in CategoryName]: null | number;
};

export default class PlayerScoreCard {
    isBot: boolean;
    categories: CategoryList;
    yahtzeeBonuses: number;

    constructor(isBot: boolean) {
        this.isBot = isBot;
        this.categories = {
            '1': null,
            '2': null,
            '3': null,
            '4': null,
            '5': null,
            '6': null,
            'threeOfAKind': null,
            'fourOfAKind': null,
            'fullHouse': null,
            'smallStraight': null,
            'largeStraight': null,
            'yahtzee': null,
            'chance': null,
        };
        this.yahtzeeBonuses = 0;
    }

    getCategoryScore(categoryName: CategoryName, dice: Dice) {
        const counts = diceToCounts(dice);
        const hasUnusableYahtzee = counts.some(isYahtzee) && this.categories.yahtzee !== null;
        const upperCategoryNotOpen = this.categories[(counts.findIndex(isYahtzee) + 1) as UpperCategory] !== null;

        const canUseJoker = 
            hasUnusableYahtzee 
            && upperCategoryNotOpen;

        switch(categoryName) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                return this.upperCategory(categoryName, counts);
            case 'threeOfAKind':
                return this.threeOfAKind(counts, canUseJoker);
            case 'fourOfAKind':
                return this.fourOfAKind(counts, canUseJoker);
            case 'fullHouse':
                return this.fullHouse(counts, canUseJoker);
            case 'smallStraight':
                return this.smallStraight(counts, canUseJoker);
            case 'largeStraight':
                return this.largeStraight(counts, canUseJoker);
            case 'yahtzee':
                return this.yahtzee(counts);
            case 'chance':
                return this.chance(counts);
            default:
                throw new Error('Tried to score unknown category');
        }
    }

    scoreCategory(categoryName: CategoryName, dice: Dice) {
        const counts = diceToCounts(dice);
        const hasUnusableYahtzee = counts.some(isYahtzee) && this.categories.yahtzee !== null;
        const hasYahtzeeBonus = hasUnusableYahtzee && this.categories.yahtzee === 50;

        const score = this.getCategoryScore(categoryName, dice);

        this.categories[categoryName] = score;
        if (hasYahtzeeBonus) this.yahtzeeBonuses++;

        return score;
    }

    getUpperTotal() {
        const upperCategories: UpperCategory[] = [1, 2, 3, 4, 5, 6];

        return upperCategories
            .reduce((total, category) => (this.categories[category] ?? 0) + total, 0);
    }

    getLowerTotal() {
        return lowerCategories.reduce((total, category) => (this.categories[category] ?? 0) + total, 0);
    }

    getUpperBonus() {
        return this.getUpperTotal() >= 63 ? 35 : 0;
    }

    getYahtzeeBonus() {
        return this.yahtzeeBonuses * 100;
    }

    getTotal() {
        const hasBeenScored = (c: number | null): c is number => c !== null;
        const catSum = Object.values(this.categories)
            .filter(hasBeenScored)
            .reduce((a, b) => a + b, 0);

        return catSum + this.getUpperBonus() + this.getYahtzeeBonus();
    }

    upperCategory(n: UpperCategory, diceCounts: DiceCounts) {
        return diceCounts[n - 1] * n
    }

    threeOfAKind(diceCounts: DiceCounts, useJoker = false) {
        if (diceCounts.some(d => d >= 3) || useJoker) return this.diceSum(diceCounts);
        else return 0;
    }

    fourOfAKind(diceCounts: DiceCounts, useJoker = false) {
        if (diceCounts.some(d => d >= 4) || useJoker) return this.diceSum(diceCounts);
        else return 0;
    }

    fullHouse(diceCounts: DiceCounts, useJoker = false) {
        if (
            (diceCounts.some(d => d == 2) && diceCounts.some(d => d == 3))
            || useJoker
        ) return 25;
        else return 0;
    }

    smallStraight(diceCounts: DiceCounts, useJoker = false) {
        if (this.countConsecutive(diceCounts) >= 4 || useJoker) return 30;
        else return 0;
    }

    largeStraight(diceCounts: DiceCounts, useJoker = false) {
        if (this.countConsecutive(diceCounts) >= 5 || useJoker) return 40;
        else return 0;
    }

    yahtzee(diceCounts: DiceCounts) {
        if (diceCounts.some(d => d == 5)) return 50;
        else return 0;
    }

    chance (diceCounts: DiceCounts) {
        return this.diceSum(diceCounts);
    }

    diceSum(diceCounts: DiceCounts) {
        return diceCounts.reduce(
            (prev, value, idx) => prev + value * (idx + 1),  
            0 as number
        );
    }

    countConsecutive(diceCounts: DiceCounts) {
        const [max] = diceCounts.reduce(([max, currentSeq], n) => {
                if (n == 0) return [max, 0];
                else {
                    const nextSeq = currentSeq + 1;
                    return [Math.max(nextSeq, max), nextSeq];
                }
        }, [0, 0]);

        return max;
    }
}
export default class Player {
    constructor(isBot) {
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
        }
        this.yahtzeeBonuses = 0;
    }

    getCategoryScore(categoryName, dice) {
        const counts = this.diceToCounts(dice);
        const isYahtzee = d => d === 5;
        const hasYahtzeeBonus = counts.some(isYahtzee) && this.categories.yahtzee !== null;
        const canUseJoker = hasYahtzeeBonus && this.categories[counts.findIndex(isYahtzee)];

        switch(categoryName) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
                return this.upperCategory(parseInt(categoryName), counts);
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
                return this.yahtzee(counts, canUseJoker);
            case 'chance':
                return this.chance(counts);
            default:
                throw new Error('Tried to score unknown category');
        }
    }

    scoreCategory(categoryName, dice) {
        const counts = this.diceToCounts(dice);
        const isYahtzee = d => d === 5;
        const hasYahtzeeBonus = counts.some(isYahtzee) && this.categories.yahtzee !== null;

        const score = this.getCategoryScore(categoryName, dice);

        this.categories[categoryName] = score;
        if (hasYahtzeeBonus) this.yahtzeeBonuses++;

        return score;
    }

    getUpperBonus() {
        const total = ['1', '2', '3', '4', '5', '6']
            .reduce((total, category) => this.categories[category] + total, 0);
        
        return total >= 63 ? 35 : 0;
    }

    getYahtzeeBonus() {
        return this.yahtzeeBonuses * 100;
    }

    getTotal() {
        const catSum = Object.values(this.categories)
            .filter(c => c !== null)
            .reduce((a, b) => a + b, 0);

        return catSum + this.getUpperBonus() + this.getYahtzeeBonus();
    }

    diceToCounts(dice) {
        return dice.reduce((counts, die) => {
            counts[die - 1]++;
            return counts
        }, [0, 0, 0, 0, 0, 0]);
    }

    upperCategory(n, diceCounts) {
        return diceCounts[n - 1] * n
    }

    threeOfAKind(diceCounts, useJoker = false) {
        if (diceCounts.some(d => d >= 3) || useJoker) return this.diceSum(diceCounts);
        else return 0;
    }

    fourOfAKind(diceCounts, useJoker = false) {
        if (diceCounts.some(d => d >= 4) || useJoker) return this.diceSum(diceCounts);
        else return 0;
    }

    fullHouse(diceCounts, useJoker = false) {
        if (
            (diceCounts.some(d => d == 2) && diceCounts.some(d => d == 3))
            || useJoker
        ) return 25;
        else return 0;
    }

    smallStraight(diceCounts, useJoker = false) {
        if (this.countConsecutive(diceCounts) >= 4 || useJoker) return 30;
        else return 0;
    }

    largeStraight(diceCounts, useJoker = false) {
        if (this.countConsecutive(diceCounts) >= 5 || useJoker) return 40;
        else return 0;
    }

    yahtzee(diceCounts) {
        if (diceCounts.some(d => d == 5)) return 50;
        else return 0;
    }

    chance (diceCounts) {
        return this.diceSum(diceCounts);
    }

    diceSum(diceCounts) {
        return diceCounts.reduce(
            (prev, value, idx) => prev + value * (idx + 1),  
            0
        );
    }

    canUseJoker(counts) {
        const isYahtzee = d => d === 5;

        return (
            counts.some(isYahtzee) && 
            this.categories.yahtzee !== null && 
            this.categories[counts.find(isYahtzee)] !== null
        );
    }

    countConsecutive(diceCounts) {
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
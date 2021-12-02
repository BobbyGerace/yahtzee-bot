import { Dice, DiceCounts } from "./types";

export const qs = (selector: string) => {
    const node = document.querySelector(selector);
    if (node) return node;
    else throw new Error('Not found: ' + selector);
}
    
export const diceToCounts = (dice: Dice): DiceCounts => {
    return dice.reduce((counts, die) => {
        counts[die - 1]++;
        return counts
    }, [0, 0, 0, 0, 0, 0]);
}

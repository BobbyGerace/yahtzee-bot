export const qs = selector => document.querySelector(selector);
    
export const diceToCounts = (dice) => {
    return dice.reduce((counts, die) => {
        counts[die - 1]++;
        return counts
    }, [0, 0, 0, 0, 0, 0]);
}

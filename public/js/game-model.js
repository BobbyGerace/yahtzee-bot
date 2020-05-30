import Player from './player.js';

const initialDice = () => [1, 1, 1, 1, 1];
const initialKeeps = () => [false, false, false, false, false];

export default class Game {
    initialize(players) {
        this.dice = initialDice();
        this.keeps = initialKeeps();
        
        this.players = players.map(isBot => new Player(isBot));

        this.rollsLeft = 3;

        this.currentPlayerIdx = 0;
    }

    toggleKeep(diceIndex) {
        this.keeps[diceIndex] = !this.keeps[diceIndex];
    }

    rollDice() {
        this.dice = this.dice.map((die, i) => {
            if (this.keeps[i]) return die;
            else return Math.ceil(Math.random() * 6);
        });

        this.rollsLeft--;

        this.keeps = initialKeeps();
    }

    currentPlayer() {
        return this.players[this.currentPlayerIdx];
    }

    getPotentialScores() {
        const player = this.currentPlayer();
        return Object.entries(this.currentPlayer().categories)
            .filter(([_, score]) => score === null)
            .map(([category]) => [
                category, 
                player.getCategoryScore(category, this.dice)
            ]);
    }

    selectCategory(category) {
        const player = this.currentPlayer();
        if (this.rollsLeft > 2 || player.categories[category] !== null) {
            return null;
        } 
        else {
            const score = player.scoreCategory(category, this.dice);
            this.currentPlayerIdx = (this.currentPlayerIdx + 1) % this.players.length;
            this.rollsLeft = 3;
            this.dice = initialDice();
            this.keeps = initialKeeps();

            return score;
        }
    }

    isGameOver() {
        return this.getPotentialScores().length === 0;
    }
}
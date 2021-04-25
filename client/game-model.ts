import PlayerScoreCard, { CategoryName } from './player-score-card.js';
import { Dice, Keeps } from './types.js';

const initialDice = (): Dice => [1, 1, 1, 1, 1];
const initialKeeps = (): Keeps => [false, false, false, false, false];


export default class Game {
    dice = initialDice();
    keeps = initialKeeps();
    players: PlayerScoreCard[] = [];
    rollsLeft: number = 3;
    currentPlayerIdx: number = 0;
    gameStopped: boolean = false;


    initialize(players: boolean[]) {
        this.dice = initialDice();
        this.keeps = initialKeeps();
        
        this.players = players.map(isBot => new PlayerScoreCard(isBot));

        this.rollsLeft = 3;

        this.currentPlayerIdx = 0;

        this.gameStopped = false;
    }

    toggleKeep(diceIndex: number) {
        this.keeps[diceIndex] = !this.keeps[diceIndex];
    }

    rollDice() {
        this.dice = this.dice.map((die, i) => {
            if (this.keeps[i]) return die;
            else return Math.ceil(Math.random() * 6);
        }) as Dice;

        this.rollsLeft--;
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
                player.getCategoryScore(category as CategoryName, this.dice)
            ]);
    }

    selectCategory(category: CategoryName) {
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

    stopGame() {
        this.gameStopped = true;
    }
}
import Player from './player.js';

const initialDice = [-1, -1, -1, -1, -1];
const initialKeeps = [false, false, false, false, false];

export default class Game {
    initialize(players) {
        this.dice = initialDice;
        this.keeps = initialKeeps;
        
        this.players = players.map(isBot => new Player(isBot));

        this.rollsLeft = 3;

        this.currentPlayerIdx = 0;
    }
}
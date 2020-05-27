import { qs } from './helpers.js';
import ScoreCardView from './score-card-view.js';

export default class MainView {
    constructor() {
        this.scoreCardView = new ScoreCardView();

        this.soloButton = qs('#play-solo');
        this.playBotButton = qs('#play-bot');
        this.botOnlyButton = qs('#bot-only');
        this.gameContainer = qs('#game-container');

        function rollDice() {
            const dice = [...document.querySelectorAll(".die-list")];
            dice.forEach((die, i) => {
                setTimeout(() => {

                    toggleClasses(die);
                    die.dataset.roll = getRandomNumber(1, 6);
                }, i * 100);
            });
        }

        function toggleClasses(die) {
            die.classList.toggle("odd-roll");
            die.classList.toggle("even-roll");
        }

        function getRandomNumber(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        document.getElementById("roll-button").addEventListener("click", rollDice);
    }

    bindGameSelect(fn) {
        // returns an array of booleans, with each value representing
        // a player and whether they are a bot
        this.soloButton.addEventListener('click', () => fn([false]));
        this.playBotButton.addEventListener('click', () => fn([false, true]));
        this.botOnlyButton.addEventListener('click', () => fn([true]));
    }

    cacheLoaded() {
        this.gameContainer.classList.remove('loading');
    }

    startGame(players) {
        this.gameContainer.classList.add('playing');
        this.scoreCardView.initialize(players);
    }
}
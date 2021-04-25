import { qs } from './helpers.js';
import ScoreCardView from './score-card-view.js';
import PlayerControlsView from './player-controls-view.js';
import PlayerScoreCard from './player-score-card.js';

export default class MainView {
    scoreCard = new ScoreCardView();
    playerControls = new PlayerControlsView();

    soloButton = qs('#play-solo');
    playBotButton = qs('#play-bot');
    botOnlyButton = qs('#bot-only');
    gameContainer = qs('#game-container');

    bindGameSelect(fn: (players: boolean[]) => void) {
        // returns an array of booleans, with each value representing
        // a player and whether they are a bot
        this.soloButton.addEventListener('click', () => fn([false]));
        this.playBotButton.addEventListener('click', () => fn([false, true]));
        this.botOnlyButton.addEventListener('click', () => fn([true]));
    }

    cacheLoaded() {
        this.gameContainer.classList.remove('loading');
    }

    startGame(players: PlayerScoreCard[]) {
        this.gameContainer.classList.add('playing');
        this.scoreCard.initialize(players);
        this.playerControls.setTurn(players[0].isBot, 3);
    }

    stopGame() {
        this.gameContainer.classList.remove('playing');
    }
}
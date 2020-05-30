import { qs } from './helpers.js';
import ScoreCardView from './score-card-view.js';
import PlayerControlsView from './player-controls-view.js';

export default class MainView {
    constructor() {
        this.scoreCardView = new ScoreCardView();
        this.playerControlsView = new PlayerControlsView();

        this.soloButton = qs('#play-solo');
        this.playBotButton = qs('#play-bot');
        this.botOnlyButton = qs('#bot-only');
        this.gameContainer = qs('#game-container');

        this.bindKeepToggle = this.playerControlsView.bindKeepToggle.bind(this.playerControlsView);
        this.bindRollClicked = this.playerControlsView.bindRollClicked.bind(this.playerControlsView);
        this.setDiceKept = this.playerControlsView.setDiceKept.bind(this.playerControlsView);
        this.rollReceived = this.playerControlsView.rollReceived.bind(this.playerControlsView);
        this.setTurn = this.playerControlsView.setTurn.bind(this.playerControlsView);
        this.setActionMessage = this.playerControlsView.setActionMessage.bind(this.playerControlsView);

        this.setCategories = this.scoreCardView.setCategories.bind(this.scoreCardView);
        this.bindCategorySelect = this.scoreCardView.bindCategorySelect.bind(this.scoreCardView);
        this.categorySelected = this.scoreCardView.categorySelected.bind(this.scoreCardView);
        this.updateTotals = this.scoreCardView.updateTotals.bind(this.scoreCardView);
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
        this.playerControlsView.setTurn(players[0].isBot, 3);
    }
}
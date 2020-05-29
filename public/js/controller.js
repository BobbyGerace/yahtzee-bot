export default class Controller {
    constructor(view, model, bot) {
        this.view = view;
        this.model = model;
        this.bot = bot;

        bot.bindCacheLoaded(this.onCacheLoaded.bind(this));
        view.bindGameSelect(this.onGameSelect.bind(this));
        view.bindKeepToggle(this.onKeepToggle.bind(this));
        view.bindRollClicked(this.onRollClicked.bind(this));
    }

    onCacheLoaded() {
        this.view.cacheLoaded();
    }

    onGameSelect(players) {
        this.model.initialize(players);
        this.view.startGame(this.model.players);
    }

    onKeepToggle(diceIndex) {
        if (
            this.model.rollsLeft < 3 
            && this.model.rollsLeft > 0 
            && !this.model.currentPlayer().isBot
        ) {
            this.model.toggleKeep(diceIndex);
            this.view.setDiceKept(diceIndex, this.model.keeps[diceIndex]);
        }
    }

    onRollClicked() {
        if (this.model.rollsLeft > 0) {
            this.model.rollDice();

            this.view.rollReceived(this.model.dice);

            this.view.setTurn(
                this.model.currentPlayer().isBot,
                this.model.rollsLeft
            );

            this.view.setCategories(
                this.model.getPotentialScores(),
                this.model.currentPlayerIdx,
                this.model.rollsLeft
            )

        }
    }
}
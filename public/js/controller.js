export default class Controller {
    constructor(view, model, bot) {
        this.view = view;
        this.model = model;
        this.bot = bot;

        bot.bindCacheLoaded(this.onCacheLoaded.bind(this));
        view.bindGameSelect(this.onGameSelect.bind(this));
        view.bindKeepToggle(this.onKeepToggle.bind(this));
        view.bindRollClicked(this.onRollClicked.bind(this));
        view.bindCategorySelect(this.onCategorySelect.bind(this));
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

    onCategorySelect(category) {
        const playerIdx = this.model.currentPlayerIdx;
        const player = this.model.currentPlayer();
        const score = this.model.selectCategory(category);
        if (score !== null) {
            this.view.setTurn(
                this.model.currentPlayer().isBot,
                this.model.rollsLeft
            );

            this.view.categorySelected(category, playerIdx, score);

            this.view.updateTotals(
                playerIdx,
                player.getTotal(),
                player.getUpperBonus(),
                player.getYahtzeeBonus(),
            );

            this.view.rollReceived(this.model.dice);
            // TODO - Bug - select turn while keeps selected
            // TODO - No roll on dice reset. maybe blank face?
        }
    }
}
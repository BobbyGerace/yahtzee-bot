export default class Controller {
    constructor(view, model, bot) {
        this.view = view;
        this.model = model;
        this.bot = bot;

        bot.bindCacheLoaded(this.onCacheLoaded.bind(this));
        bot.bindKeepToggle(this.onKeepToggle.bind(this));
        bot.bindRollClicked(this.onRollClicked.bind(this));
        bot.bindCategorySelect(this.onCategorySelect.bind(this));
        bot.bindActionMessage(this.onActionMessage.bind(this));

        view.bindGameSelect(this.onGameSelect.bind(this));
        view.bindKeepToggle(this.onKeepToggle.bind(this));
        view.bindRollClicked(this.onRollClicked.bind(this));
        view.bindCategorySelect(this.onCategorySelect.bind(this));
        view.bindBackToMenu(this.onBackToMenu.bind(this));
    }

    onCacheLoaded() {
        this.view.cacheLoaded();
    }

    onGameSelect(players) {
        this.model.initialize(players);
        this.view.startGame(this.model.players);

        this.maybeBotChoose();
    }

    onKeepToggle(diceIndex, fromBot) {
        if (!this.playerIsAllowed(fromBot)) return;

        if (
            this.model.rollsLeft < 3 
            && this.model.rollsLeft > 0 
        ) {
            this.model.toggleKeep(diceIndex);
            this.view.setDiceKept(diceIndex, this.model.keeps[diceIndex]);
        }
    }

    onRollClicked(fromBot) {
        if (!this.playerIsAllowed(fromBot)) return;

        if (this.model.rollsLeft > 0) {
            this.model.rollDice();

            this.view.rollReceived(this.model.dice, this.model.rollsLeft === 0);

            this.view.setTurn(
                this.model.currentPlayer().isBot,
                this.model.rollsLeft
            );

            this.view.setCategories(
                this.model.getPotentialScores(),
                this.model.currentPlayerIdx,
                this.model.rollsLeft
            );
        }

        this.maybeBotChoose();
    }

    onCategorySelect(category, fromBot) {
        if (!this.playerIsAllowed(fromBot)) return;

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
        }

        if (this.model.isGameOver()) {
            const players = this.model.players.map(p => ({
                isBot: p.isBot,
                score: p.getTotal(),
            }));
            this.view.setGameOver(players);
        }
        else {
            this.maybeBotChoose();
        }
    }

    onActionMessage(msg) {
        this.view.setActionMessage(msg);
    }

    maybeBotChoose() {
        if (this.model.currentPlayer().isBot) {
            this.bot.makeChoice(this.model);
        }
    }

    playerIsAllowed(fromBot = false) {
        return !this.model.gameStopped 
            && this.model.currentPlayer().isBot === fromBot;
    }

    onBackToMenu() {
        this.model.stopGame();
        this.view.stopGame();
    }
}
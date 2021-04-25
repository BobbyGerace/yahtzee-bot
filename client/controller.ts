import Bot from "./bot-service";
import Game from "./game-model";
import MainView from "./main-view";
import { CategoryName } from "./player-score-card";

export default class Controller {
    view: MainView;
    model: Game;
    bot: Bot;

    constructor(view: MainView, model: Game, bot: any) {
        this.view = view;
        this.model = model;
        this.bot = bot;

        bot.bindCacheLoaded(this.onCacheLoaded.bind(this));
        bot.bindKeepToggle(this.onKeepToggle.bind(this));
        bot.bindRollClicked(this.onRollClicked.bind(this));
        bot.bindCategorySelect(this.onCategorySelect.bind(this));
        bot.bindActionMessage(this.onActionMessage.bind(this));

        view.bindGameSelect(this.onGameSelect.bind(this));
        view.playerControls.bindKeepToggle(this.onKeepToggle.bind(this));
        view.playerControls.bindRollClicked(this.onRollClicked.bind(this));
        view.scoreCard.bindCategorySelect(this.onCategorySelect.bind(this));
        view.scoreCard.bindBackToMenu(this.onBackToMenu.bind(this));
    }

    onCacheLoaded() {
        this.view.cacheLoaded();
    }

    onGameSelect(players: boolean[]) {
        this.model.initialize(players);
        this.view.startGame(this.model.players);

        this.bot.setNewGame();

        this.maybeBotChoose();
    }

    onKeepToggle(diceIndex: number, fromBot?: boolean) {
        if (!this.playerIsAllowed(fromBot)) return;

        if (
            this.model.rollsLeft < 3 
            && this.model.rollsLeft > 0 
        ) {
            this.model.toggleKeep(diceIndex);
            this.view.playerControls.setDiceKept(diceIndex, this.model.keeps[diceIndex]);
        }
    }

    onRollClicked(fromBot?: boolean) {
        if (!this.playerIsAllowed(fromBot)) return;

        if (this.model.rollsLeft > 0) {
            this.model.rollDice();

            this.view.playerControls.rollReceived(this.model.dice, this.model.rollsLeft === 0);

            this.view.playerControls.setTurn(
                this.model.currentPlayer().isBot,
                this.model.rollsLeft
            );

            this.view.scoreCard.setCategories(
                this.model.getPotentialScores() as [string, number][],
                this.model.currentPlayerIdx,
                this.model.rollsLeft
            );
        }

        this.maybeBotChoose();
    }

    onCategorySelect(category: CategoryName, fromBot?: boolean) {
        if (!this.playerIsAllowed(fromBot)) return;

        const playerIdx = this.model.currentPlayerIdx;
        const player = this.model.currentPlayer();
        const score = this.model.selectCategory(category);
        if (score !== null) {
            this.view.playerControls.setTurn(
                this.model.currentPlayer().isBot,
                this.model.rollsLeft
            );

            this.view.scoreCard.categorySelected(category.toString(), playerIdx, score);

            this.view.scoreCard.updateTotals(
                playerIdx,
                player.getTotal(),
                player.getUpperBonus(),
                player.getYahtzeeBonus(),
                player.getUpperTotal(),
                player.getLowerTotal(),
            );
        }

        if (this.model.isGameOver()) {
            const players = this.model.players.map(p => ({
                isBot: p.isBot,
                score: p.getTotal(),
            }));
            this.view.playerControls.setGameOver(players);
        }
        else {
            this.maybeBotChoose();
        }
    }

    onActionMessage(msg: string) {
        this.view.playerControls.setActionMessage(msg);
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
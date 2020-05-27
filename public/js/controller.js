export default class Controller {
    constructor(view, model, bot) {
        this.view = view;
        this.model = model;
        this.bot = bot;

        bot.bindCacheLoaded(this.onCacheLoaded.bind(this));
        view.bindGameSelect(this.onGameSelect.bind(this))
    }

    onCacheLoaded() {
        this.view.cacheLoaded();
    }

    onGameSelect(players) {
        this.model.initialize(players);
        this.view.startGame(this.model.players);
    }
}
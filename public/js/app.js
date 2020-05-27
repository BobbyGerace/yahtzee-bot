import Game from './game-model.js';
import Controller from './controller.js';
import View from './main-view.js';
import Bot from './bot-service.js';

const view = new View();
const game = new Game();
const bot = new Bot();
new Controller(view, game, bot);
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("helpers", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.diceToCounts = exports.qs = void 0;
    const qs = (selector) => document.querySelector(selector);
    exports.qs = qs;
    const diceToCounts = (dice) => {
        return dice.reduce((counts, die) => {
            counts[die - 1]++;
            return counts;
        }, [0, 0, 0, 0, 0, 0]);
    };
    exports.diceToCounts = diceToCounts;
});
define("player-score-card", ["require", "exports", "helpers"], function (require, exports, helpers_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const isYahtzee = (d) => d === 5;
    const upperCategories = [1, 2, 3, 4, 5, 6];
    const lowerCategories = [
        'threeOfAKind',
        'fourOfAKind',
        'fullHouse',
        'smallStraight',
        'largeStraight',
        'yahtzee',
        'chance',
    ];
    class PlayerScoreCard {
        constructor(isBot) {
            this.isBot = isBot;
            this.categories = {
                '1': null,
                '2': null,
                '3': null,
                '4': null,
                '5': null,
                '6': null,
                'threeOfAKind': null,
                'fourOfAKind': null,
                'fullHouse': null,
                'smallStraight': null,
                'largeStraight': null,
                'yahtzee': null,
                'chance': null,
            };
            this.yahtzeeBonuses = 0;
        }
        getCategoryScore(categoryName, dice) {
            const counts = helpers_js_1.diceToCounts(dice);
            const hasUnusableYahtzee = counts.some(isYahtzee) && this.categories.yahtzee !== null;
            const upperCategoryNotOpen = this.categories[(counts.findIndex(isYahtzee) + 1)] !== null;
            const canUseJoker = hasUnusableYahtzee
                && upperCategoryNotOpen;
            switch (categoryName) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    return this.upperCategory(categoryName, counts);
                case 'threeOfAKind':
                    return this.threeOfAKind(counts, canUseJoker);
                case 'fourOfAKind':
                    return this.fourOfAKind(counts, canUseJoker);
                case 'fullHouse':
                    return this.fullHouse(counts, canUseJoker);
                case 'smallStraight':
                    return this.smallStraight(counts, canUseJoker);
                case 'largeStraight':
                    return this.largeStraight(counts, canUseJoker);
                case 'yahtzee':
                    return this.yahtzee(counts);
                case 'chance':
                    return this.chance(counts);
                default:
                    throw new Error('Tried to score unknown category');
            }
        }
        scoreCategory(categoryName, dice) {
            const counts = helpers_js_1.diceToCounts(dice);
            const hasUnusableYahtzee = counts.some(isYahtzee) && this.categories.yahtzee !== null;
            const hasYahtzeeBonus = hasUnusableYahtzee && this.categories.yahtzee === 50;
            const score = this.getCategoryScore(categoryName, dice);
            this.categories[categoryName] = score;
            if (hasYahtzeeBonus)
                this.yahtzeeBonuses++;
            return score;
        }
        getUpperTotal() {
            const upperCategories = [1, 2, 3, 4, 5, 6];
            return upperCategories
                .reduce((total, category) => { var _a; return ((_a = this.categories[category]) !== null && _a !== void 0 ? _a : 0) + total; }, 0);
        }
        getLowerTotal() {
            return lowerCategories.reduce((total, category) => { var _a; return ((_a = this.categories[category]) !== null && _a !== void 0 ? _a : 0) + total; }, 0);
        }
        getUpperBonus() {
            return this.getUpperTotal() >= 63 ? 35 : 0;
        }
        getYahtzeeBonus() {
            return this.yahtzeeBonuses * 100;
        }
        getTotal() {
            const hasBeenScored = (c) => c !== null;
            const catSum = Object.values(this.categories)
                .filter(hasBeenScored)
                .reduce((a, b) => a + b, 0);
            return catSum + this.getUpperBonus() + this.getYahtzeeBonus();
        }
        upperCategory(n, diceCounts) {
            return diceCounts[n - 1] * n;
        }
        threeOfAKind(diceCounts, useJoker = false) {
            if (diceCounts.some(d => d >= 3) || useJoker)
                return this.diceSum(diceCounts);
            else
                return 0;
        }
        fourOfAKind(diceCounts, useJoker = false) {
            if (diceCounts.some(d => d >= 4) || useJoker)
                return this.diceSum(diceCounts);
            else
                return 0;
        }
        fullHouse(diceCounts, useJoker = false) {
            if ((diceCounts.some(d => d == 2) && diceCounts.some(d => d == 3))
                || useJoker)
                return 25;
            else
                return 0;
        }
        smallStraight(diceCounts, useJoker = false) {
            if (this.countConsecutive(diceCounts) >= 4 || useJoker)
                return 30;
            else
                return 0;
        }
        largeStraight(diceCounts, useJoker = false) {
            if (this.countConsecutive(diceCounts) >= 5 || useJoker)
                return 40;
            else
                return 0;
        }
        yahtzee(diceCounts) {
            if (diceCounts.some(d => d == 5))
                return 50;
            else
                return 0;
        }
        chance(diceCounts) {
            return this.diceSum(diceCounts);
        }
        diceSum(diceCounts) {
            return diceCounts.reduce((prev, value, idx) => prev + value * (idx + 1), 0);
        }
        countConsecutive(diceCounts) {
            const [max] = diceCounts.reduce(([max, currentSeq], n) => {
                if (n == 0)
                    return [max, 0];
                else {
                    const nextSeq = currentSeq + 1;
                    return [Math.max(nextSeq, max), nextSeq];
                }
            }, [0, 0]);
            return max;
        }
    }
    exports.default = PlayerScoreCard;
});
define("game-model", ["require", "exports", "player-score-card"], function (require, exports, player_score_card_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    player_score_card_js_1 = __importDefault(player_score_card_js_1);
    const initialDice = () => [1, 1, 1, 1, 1];
    const initialKeeps = () => [false, false, false, false, false];
    class Game {
        constructor() {
            this.dice = initialDice();
            this.keeps = initialKeeps();
            this.players = [];
            this.rollsLeft = 3;
            this.currentPlayerIdx = 0;
            this.gameStopped = false;
        }
        initialize(players) {
            this.dice = initialDice();
            this.keeps = initialKeeps();
            this.players = players.map(isBot => new player_score_card_js_1.default(isBot));
            this.rollsLeft = 3;
            this.currentPlayerIdx = 0;
            this.gameStopped = false;
        }
        toggleKeep(diceIndex) {
            this.keeps[diceIndex] = !this.keeps[diceIndex];
        }
        rollDice() {
            this.dice = this.dice.map((die, i) => {
                if (this.keeps[i])
                    return die;
                else
                    return Math.ceil(Math.random() * 6);
            });
            this.rollsLeft--;
        }
        currentPlayer() {
            return this.players[this.currentPlayerIdx];
        }
        getPotentialScores() {
            const player = this.currentPlayer();
            return Object.entries(this.currentPlayer().categories)
                .filter(([_, score]) => score === null)
                .map(([category]) => [
                category,
                player.getCategoryScore(category, this.dice)
            ]);
        }
        selectCategory(category) {
            const player = this.currentPlayer();
            if (this.rollsLeft > 2 || player.categories[category] !== null) {
                return null;
            }
            else {
                const score = player.scoreCategory(category, this.dice);
                this.currentPlayerIdx = (this.currentPlayerIdx + 1) % this.players.length;
                this.rollsLeft = 3;
                this.dice = initialDice();
                this.keeps = initialKeeps();
                return score;
            }
        }
        isGameOver() {
            return this.getPotentialScores().length === 0;
        }
        stopGame() {
            this.gameStopped = true;
        }
    }
    exports.default = Game;
});
define("controller", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Controller {
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
            if (!this.playerIsAllowed(fromBot))
                return;
            if (this.model.rollsLeft < 3
                && this.model.rollsLeft > 0) {
                this.model.toggleKeep(diceIndex);
                this.view.setDiceKept(diceIndex, this.model.keeps[diceIndex]);
            }
        }
        onRollClicked(fromBot) {
            if (!this.playerIsAllowed(fromBot))
                return;
            if (this.model.rollsLeft > 0) {
                this.model.rollDice();
                this.view.rollReceived(this.model.dice, this.model.rollsLeft === 0);
                this.view.setTurn(this.model.currentPlayer().isBot, this.model.rollsLeft);
                this.view.setCategories(this.model.getPotentialScores(), this.model.currentPlayerIdx, this.model.rollsLeft);
            }
            this.maybeBotChoose();
        }
        onCategorySelect(category, fromBot) {
            if (!this.playerIsAllowed(fromBot))
                return;
            const playerIdx = this.model.currentPlayerIdx;
            const player = this.model.currentPlayer();
            const score = this.model.selectCategory(category);
            if (score !== null) {
                this.view.setTurn(this.model.currentPlayer().isBot, this.model.rollsLeft);
                this.view.categorySelected(category, playerIdx, score);
                this.view.updateTotals(playerIdx, player.getTotal(), player.getUpperBonus(), player.getYahtzeeBonus(), player.getUpperTotal(), player.getLowerTotal());
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
    exports.default = Controller;
});
define("score-card-view", ["require", "exports", "helpers"], function (require, exports, helpers_js_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ScoreCardView {
        constructor() {
            this.container = helpers_js_2.qs('#score-card-container');
            this.player0Name = helpers_js_2.qs('#player-0-name');
            this.player1Name = helpers_js_2.qs('#player-1-name');
        }
        initialize(players) {
            // Set single player or not
            if (players.length === 1)
                this.container.classList.add('single-player');
            else
                this.container.classList.remove('single-player');
            // Set player score titles
            this.player0Name.textContent = this.getPlayerTitle(players[0]);
            this.player1Name.textContent = this.getPlayerTitle(players[1]);
            // Reset all scores
            document.querySelectorAll('.score-cell')
                .forEach(c => {
                c.classList.add('potential');
                c.classList.remove('zero');
                c.textContent = '0';
            });
            // Reset all categories
            document.querySelectorAll('.open')
                .forEach(c => c.classList.remove('.open'));
            // Reset all bonuses and totals
            helpers_js_2.qs('#player-0-upper-bonus').textContent = '0';
            helpers_js_2.qs('#player-1-upper-bonus').textContent = '0';
            helpers_js_2.qs('#player-0-yahtzee-bonus').textContent = '0';
            helpers_js_2.qs('#player-1-yahtzee-bonus').textContent = '0';
            helpers_js_2.qs('#player-0-total').textContent = '0';
            helpers_js_2.qs('#player-1-total').textContent = '0';
            helpers_js_2.qs('#player-0-upper-total').textContent = '0';
            helpers_js_2.qs('#player-1-upper-total').textContent = '0';
            helpers_js_2.qs('#player-0-lower-total').textContent = '0';
            helpers_js_2.qs('#player-1-lower-total').textContent = '0';
            helpers_js_2.qs('#player-0-upper-total-lower-card').textContent = '0';
            helpers_js_2.qs('#player-1-upper-total-lower-card').textContent = '0';
        }
        clearCategories() {
            // unset all potential scores
            document.querySelectorAll('.potential')
                .forEach(node => {
                node.textContent = '';
                node.classList.remove('zero');
            });
            // remove open categories
            document.querySelectorAll('.open')
                .forEach(node => {
                node.classList.remove('open');
            });
        }
        setCategories(potentialScores, playerIdx, rollsLeft) {
            if (rollsLeft > 2)
                return;
            this.clearCategories();
            potentialScores.forEach(([category, score]) => {
                const row = helpers_js_2.qs(`[data-category="${category}"]`);
                const cell = row.querySelector(`[data-player="${playerIdx}"]`);
                row.classList.add('open');
                if (score === 0)
                    cell.classList.add('zero');
                cell.textContent = score;
            });
        }
        getPlayerTitle(player) {
            if (!player)
                return '';
            else if (player.isBot)
                return 'Bot Score';
            else
                return 'Your Score';
        }
        bindCategorySelect(fn) {
            document.querySelectorAll('[data-category]').forEach(row => {
                row.addEventListener('click', () => fn(row.dataset.category));
            });
        }
        bindBackToMenu(fn) {
            helpers_js_2.qs('#back-to-menu').addEventListener('click', () => fn());
        }
        categorySelected(category, playerIdx, score) {
            const row = helpers_js_2.qs(`[data-category="${category}"`);
            const cell = row.querySelector(`[data-player="${playerIdx}"]`);
            this.clearCategories();
            cell.classList.remove('zero');
            cell.classList.remove('potential');
            cell.textContent = score;
        }
        updateTotals(playerIdx, total, upperBonus, yahtzeeBonus, upperTotal, lowerTotal) {
            helpers_js_2.qs(`#player-${playerIdx}-total`).textContent = total;
            helpers_js_2.qs(`#player-${playerIdx}-upper-bonus`).textContent = upperBonus;
            helpers_js_2.qs(`#player-${playerIdx}-yahtzee-bonus`).textContent = yahtzeeBonus;
            helpers_js_2.qs(`#player-${playerIdx}-yahtzee-bonus`).textContent = yahtzeeBonus;
            helpers_js_2.qs(`#player-${playerIdx}-upper-total-lower-card`).textContent = upperTotal + upperBonus;
            helpers_js_2.qs(`#player-${playerIdx}-upper-total`).textContent = upperTotal + upperBonus;
            helpers_js_2.qs(`#player-${playerIdx}-lower-total`).textContent = lowerTotal + yahtzeeBonus;
        }
    }
    exports.default = ScoreCardView;
});
define("player-controls-view", ["require", "exports", "helpers"], function (require, exports, helpers_js_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PlayerControlsView {
        constructor() {
            this.dieNodes = [...document.querySelectorAll('.die-list')];
            this.rollButton = helpers_js_3.qs('#roll-button');
            this.turnMessage = helpers_js_3.qs('#turn-message');
            this.helpText = helpers_js_3.qs('#help-text');
            this.actionMessage = helpers_js_3.qs('#action-message');
        }
        setTurn(isBot, rollsLeft) {
            this.reset();
            if (rollsLeft === 3) {
                // Unkeep dice
                document.querySelectorAll('.selected')
                    .forEach(node => {
                    node.classList.remove('selected');
                });
                this.dieNodes.forEach(d => d.classList.add('blank'));
            }
            this.setTitle(isBot, rollsLeft);
            this.setHelpText(isBot, rollsLeft);
            this.setButton(isBot, rollsLeft);
        }
        setTitle(isBot, rollsLeft) {
            const turnTitle = isBot ? 'Bot\'s turn' : 'Your turn';
            const rollsMessage = rollsLeft === 1 ? '1 roll left' : `${rollsLeft} rolls left`;
            this.turnMessage.textContent = `${turnTitle} - ${rollsMessage}`;
        }
        setGameOver(players) {
            helpers_js_3.qs('.controls-container').classList.add('game-over');
            let gameMessage;
            if (players.length === 1) {
                gameMessage = 'Game over';
            }
            else if (players[0].score === players[1].score) {
                gameMessage = 'Tie';
            }
            else if (players[0].score > players[1].score === players[0].isBot) {
                gameMessage = 'Bot wins';
            }
            else {
                gameMessage = 'You win';
            }
            this.turnMessage.textContent = gameMessage;
            players.forEach((p, i) => {
                const possessive = p.isBot ? 'Bot\'s' : 'Your';
                helpers_js_3.qs(`#p${i}-score`).textContent = `${possessive} score: ${p.score}`;
            });
        }
        setHelpText(isBot, rollsLeft) {
            let helpMessage = '';
            if (isBot)
                helpMessage = '';
            else if (rollsLeft === 3)
                helpMessage = 'Click the button to roll the dice';
            else if (rollsLeft < 1)
                helpMessage = 'Click a category to score';
            else
                helpMessage = 'Select dice to keep and roll again, or click a category to score';
            this.helpText.textContent = helpMessage;
        }
        setButton(isBot, rollsLeft) {
            if (isBot) {
                this.rollButton.classList.add('hidden');
                this.actionMessage.classList.remove('hidden');
            }
            else {
                this.rollButton.classList.remove('hidden');
                this.actionMessage.classList.add('hidden');
            }
            // Disable the button while the dice are rolling,
            // only re-enable it if it's not the last roll
            if (rollsLeft < 3)
                this.rollButton.disabled = true;
            else
                this.rollButton.disabled = false;
            if (rollsLeft > 0 && rollsLeft < 3) {
                setTimeout(() => {
                    this.rollButton.disabled = false;
                }, 1500);
            }
            if (rollsLeft === 3)
                this.rollButton.textContent = 'Roll dice';
            else
                this.rollButton.textContent = 'Roll again';
        }
        bindKeepToggle(fn) {
            this.dieNodes.forEach((d, i) => {
                d.addEventListener('click', () => fn(i));
            });
        }
        setDiceKept(diceIndex, isKept) {
            if (isKept) {
                this.dieNodes[diceIndex].classList.add('selected');
            }
            else {
                this.dieNodes[diceIndex].classList.remove('selected');
            }
        }
        rollReceived(newRoll, resetKeeps = false) {
            let diceToRoll = 0;
            newRoll.forEach((dieValue, i) => {
                const die = this.dieNodes[i];
                if (die.classList.contains('selected')) {
                    if (resetKeeps)
                        die.classList.remove('selected');
                    return;
                }
                setTimeout(() => {
                    die.dataset.roll = dieValue;
                    die.classList.remove('blank');
                    die.classList.toggle("odd-roll");
                    die.classList.toggle("even-roll");
                }, diceToRoll * 100);
                diceToRoll++;
            });
        }
        bindRollClicked(fn) {
            this.rollButton.addEventListener('click', () => fn());
        }
        setActionMessage(msg) {
            if (!msg) {
                msg = '\u00a0'; // nbsp
            }
            this.actionMessage.textContent = msg;
        }
        reset() {
            helpers_js_3.qs('.controls-container').classList.remove('game-over');
            this.setActionMessage('');
            document.querySelectorAll('.score-message').forEach((s) => {
                s.textContent = '';
            });
        }
    }
    exports.default = PlayerControlsView;
});
define("main-view", ["require", "exports", "helpers", "score-card-view", "player-controls-view"], function (require, exports, helpers_js_4, score_card_view_js_1, player_controls_view_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    score_card_view_js_1 = __importDefault(score_card_view_js_1);
    player_controls_view_js_1 = __importDefault(player_controls_view_js_1);
    class MainView {
        constructor() {
            this.scoreCardView = new score_card_view_js_1.default();
            this.playerControlsView = new player_controls_view_js_1.default();
            this.soloButton = helpers_js_4.qs('#play-solo');
            this.playBotButton = helpers_js_4.qs('#play-bot');
            this.botOnlyButton = helpers_js_4.qs('#bot-only');
            this.gameContainer = helpers_js_4.qs('#game-container');
            this.bindKeepToggle = this.playerControlsView.bindKeepToggle.bind(this.playerControlsView);
            this.bindRollClicked = this.playerControlsView.bindRollClicked.bind(this.playerControlsView);
            this.setDiceKept = this.playerControlsView.setDiceKept.bind(this.playerControlsView);
            this.rollReceived = this.playerControlsView.rollReceived.bind(this.playerControlsView);
            this.setTurn = this.playerControlsView.setTurn.bind(this.playerControlsView);
            this.setActionMessage = this.playerControlsView.setActionMessage.bind(this.playerControlsView);
            this.setGameOver = this.playerControlsView.setGameOver.bind(this.playerControlsView);
            this.setCategories = this.scoreCardView.setCategories.bind(this.scoreCardView);
            this.bindCategorySelect = this.scoreCardView.bindCategorySelect.bind(this.scoreCardView);
            this.bindBackToMenu = this.scoreCardView.bindBackToMenu.bind(this.scoreCardView);
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
        stopGame() {
            this.gameContainer.classList.remove('playing');
        }
    }
    exports.default = MainView;
});
define("bot-service", ["require", "exports", "helpers"], function (require, exports, helpers_js_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const noop = () => { };
    // Allow adjustment from the console
    console.log('Adjust window.BOT_DELAY to change bot speed');
    window.BOT_DELAY = 1000;
    class Bot {
        constructor() {
            this.latestRoll = [1, 1, 1, 1, 1];
            this.latestKeeps = [false, false, false, false, false];
            this.cacheLoadedListener = noop;
            this.rollRequestedListener = noop;
            this.categorySelectedListener = noop;
            this.keepToggleListener = noop;
            this.actionMessageListener = noop;
            this.choiceRequestTime = 0;
            this.worker = new Worker('js/worker.js');
            this.worker.onmessage = (e) => {
                this.handleMessage(e.data);
            };
            window.worker = this.worker;
        }
        bindCacheLoaded(fn) {
            this.cacheLoadedListener = fn;
        }
        bindRollClicked(fn) {
            this.rollRequestedListener = fn;
        }
        bindCategorySelect(fn) {
            this.categorySelectedListener = fn;
        }
        bindKeepToggle(fn) {
            this.keepToggleListener = fn;
        }
        bindActionMessage(fn) {
            this.actionMessageListener = fn;
        }
        makeChoice(model) {
            this.latestRoll = model.dice;
            this.latestKeeps = model.keeps;
            this.choiceRequestTime = Date.now();
            const roll = helpers_js_5.diceToCounts(model.dice);
            const rollsLeft = model.rollsLeft;
            const openCategories = model.getPotentialScores()
                .map(([categoryName]) => categoryName);
            const upperScore = model.currentPlayer().getUpperTotal();
            const yahtzeeBonusAvailable = model.currentPlayer().categories.yahtzee === 50;
            if (rollsLeft === 3)
                return this.withBotDelay(() => this.rollRequestedListener(true));
            const message = {
                action: 'choose',
                roll,
                rollsLeft,
                openCategories,
                upperScore,
                yahtzeeBonusAvailable,
            };
            this.worker.postMessage(message);
        }
        handleMessage(data) {
            console.log('messageReceived', data);
            switch (data.message) {
                case 'cacheLoaded':
                    this.cacheLoadedListener();
                    break;
                case 'keep':
                    this.withBotDelay(() => {
                        this.doKeeps(data.value);
                    }, 3);
                    const dice = sumKeeps(data.value);
                    const word = dice === 1 ? 'die' : 'dice';
                    this.actionMessageListener(`Keeping ${dice} ${word}`);
                    break;
                case 'category':
                    this.actionMessageListener(`Choosing category: ${mapCategoryToLabel(data.value)}`);
                    this.withBotDelay(() => {
                        this.categorySelectedListener(data.value, true);
                    }, 3);
                    break;
                default:
                    break;
            }
        }
        doKeeps(keeps, dice = this.latestRoll, idx = 0) {
            // Keep one dice at a time
            const [thisDie, ...rest] = dice;
            const keepIdx = thisDie - 1;
            // If it's empty then roll
            if (typeof thisDie === 'undefined') {
                setTimeout(() => this.rollRequestedListener(true), this.getBotDelay() * 0.7);
            }
            // If we need to keep it and it's not already kept
            else if (keeps[keepIdx] > 0 && !this.latestKeeps[idx]) {
                this.keepToggleListener(idx, true);
                const newKeeps = [...keeps];
                newKeeps[keepIdx]--;
                setTimeout(() => this.doKeeps(newKeeps, rest, idx + 1), this.getBotDelay() * 0.7);
            }
            // If we need to keep it and it's already kept
            else if (keeps[keepIdx] > 0 && this.latestKeeps[idx]) {
                const newKeeps = [...keeps];
                newKeeps[keepIdx]--;
                this.doKeeps(newKeeps, rest, idx + 1);
            }
            // If we don't need to keep it and it is already kept
            else if (keeps[keepIdx] === 0 && this.latestKeeps[idx]) {
                this.keepToggleListener(idx, true);
                const newKeeps = [...keeps];
                setTimeout(() => this.doKeeps(newKeeps, rest, idx + 1), this.getBotDelay() * 0.7);
                return;
            }
            // Otherwise proceed immeditely to the next one
            else
                this.doKeeps(keeps, rest, idx + 1);
        }
        withBotDelay(fn, multiplier = 1) {
            const targetTime = this.getBotDelay() * multiplier + this.choiceRequestTime;
            const now = Date.now();
            const timeOut = Math.max(targetTime - now, 0);
            setTimeout(fn, timeOut);
        }
        getBotDelay() {
            return window.BOT_DELAY;
        }
    }
    exports.default = Bot;
    const mapCategoryToLabel = (name) => {
        return {
            '1': 'Upper One',
            '2': 'Upper Two',
            '3': 'Upper Three',
            '4': 'Upper Four',
            '5': 'Upper Five',
            '6': 'Upper Six',
            'threeOfAKind': 'Three of a Kind',
            'fourOfAKind': 'Four of a Kind',
            'fullHouse': 'Full House',
            'smallStraight': 'Small Straight',
            'largeStraight': 'Large Straight',
            'yahtzee': 'Yahtzee',
            'chance': 'Chance',
        }[name];
    };
    const sumKeeps = (keeps) => keeps.reduce((a, b) => a + b, 0);
});
define("app", ["require", "exports", "game-model", "controller", "main-view", "bot-service"], function (require, exports, game_model_js_1, controller_js_1, main_view_js_1, bot_service_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    game_model_js_1 = __importDefault(game_model_js_1);
    controller_js_1 = __importDefault(controller_js_1);
    main_view_js_1 = __importDefault(main_view_js_1);
    bot_service_js_1 = __importDefault(bot_service_js_1);
    const view = new main_view_js_1.default();
    const game = new game_model_js_1.default();
    const bot = new bot_service_js_1.default();
    new controller_js_1.default(view, game, bot);
});

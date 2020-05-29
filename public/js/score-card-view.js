import { qs } from './helpers.js';

export default class ScoreCardView {
    constructor() {
        this.container = qs('#score-card-container');
        this.player0Name = qs('#player-0-name');
        this.player1Name = qs('#player-1-name');
    }

    initialize(players) {
        // Set single player or not
        if (players.length === 1) this.container.classList.add('single-player');
        else this.container.classList.remove('single-player');

        // Set player score titles
        this.player0Name.textContent = this.getPlayerTitle(players[0]);
        this.player1Name.textContent = this.getPlayerTitle(players[1])

        // Reset all scores
        document.querySelectorAll('.score-cell')
            .forEach(c => {
                c.classList.add('potential');
                c.classList.remove('zero');
                c.textContent = '0';
            });

        // Reset all categories
        document.querySelectorAll('.open')
            .forEach(c => c.classList.remove('.open'))

        // Reset all bonuses and totals
        qs('#player-0-upper-bonus').textContent = '0';
        qs('#player-1-upper-bonus').textContent = '0';
        qs('#player-0-yahtzee-bonus').textContent = '0';
        qs('#player-1-yahtzee-bonus').textContent = '0';
        qs('#player-0-total').textContent = '0';
        qs('#player-1-total').textContent = '0';
    }

    clearCategories() {
        // unset all potential scores
        document.querySelectorAll('.potential')
            .forEach(node => {
                node.textContent = '';
                node.classList.remove('zero');
            });

        document.querySelectorAll('.open')
            .forEach(node => {
                node.classList.remove('open');
            });
    }

    setCategories(potentialScores, playerIdx, rollsLeft) {
        if (rollsLeft > 2) return;

        this.clearCategories();

        potentialScores.forEach(([category, score]) => {
            const row = qs(`[data-category="${category}"]`);
            const cell = row.querySelector(`[data-player="${playerIdx}"]`);

            row.classList.add('open');

            if (score === 0) cell.classList.add('zero');

            cell.textContent = score;
        });
    }

    getPlayerTitle(player) {
        if (!player) return '';
        else if (player.isBot) return 'Bot Score';
        else return 'Your Score';
    }

    bindCategorySelect(fn) {
        document.querySelectorAll('[data-category]').forEach(row => {
            row.addEventListener('click', () => fn(row.dataset.category));
        });
    }

    categorySelected(category, playerIdx, score) {
        const row = qs(`[data-category="${category}"`);
        const cell = row.querySelector(`[data-player="${playerIdx}"]`)

        this.clearCategories();

        cell.classList.remove('zero');
        cell.classList.remove('potential');
        cell.textContent = score;
    }

    updateTotals(playerIdx, total, upperBonus, yahtzeeBonus) {
        qs(`#player-${playerIdx}-total`).textContent = total;
        qs(`#player-${playerIdx}-upper-bonus`).textContent = upperBonus;
        qs(`#player-${playerIdx}-yahtzee-bonus`).textContent = yahtzeeBonus;
    }
}
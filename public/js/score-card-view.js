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

    setCategories(potentialScores, playerIdx, rollsLeft) {
        if (rollsLeft > 2) return;

        // unset all potential scores
        document.querySelectorAll('.potential')
            .forEach(node => node.textContent = '');

        potentialScores.forEach(([category, score]) => {
            const row = qs(`[data-category="${category}"]`);
            const cell = row.querySelector(`[data-player="${playerIdx}"]`);

            row.classList.add('open');

            cell.textContent = score;
        });
    }

    getPlayerTitle(player) {
        if (!player) return '';
        else if (player.isBot) return 'Bot Score';
        else return 'Your Score';
    }
}
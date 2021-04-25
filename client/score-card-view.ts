import { qs } from './helpers.js';
import PlayerScoreCard, { CategoryName } from './player-score-card.js';

export default class ScoreCardView {
    container: HTMLElement;
    player0Name: HTMLElement;
    player1Name: HTMLElement;

    constructor() {
        this.container = qs('#score-card-container') as HTMLElement;
        this.player0Name = qs('#player-0-name') as HTMLElement;
        this.player1Name = qs('#player-1-name') as HTMLElement;
    }

    initialize(players: PlayerScoreCard[]) {
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
        qs('#player-0-upper-total').textContent = '0';
        qs('#player-1-upper-total').textContent = '0';
        qs('#player-0-lower-total').textContent = '0';
        qs('#player-1-lower-total').textContent = '0';
        qs('#player-0-upper-total-lower-card').textContent = '0';
        qs('#player-1-upper-total-lower-card').textContent = '0';
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

    setCategories(potentialScores: [string, number][], playerIdx: number, rollsLeft: number) {
        if (rollsLeft > 2) return;

        this.clearCategories();

        potentialScores.forEach(([category, score]) => {
            const row = qs(`[data-category="${category}"]`);
            const cell = row.querySelector(`[data-player="${playerIdx}"]`)!;

            row.classList.add('open');

            if (score === 0) cell.classList.add('zero');

            cell.textContent = score.toString();
        });
    }

    getPlayerTitle(player: PlayerScoreCard) {
        if (!player) return '';
        else if (player.isBot) return 'Bot Score';
        else return 'Your Score';
    }

    bindCategorySelect(fn: (category: CategoryName) => void) {
        document.querySelectorAll('[data-category]').forEach(row => {
            row.addEventListener(
                'click', 
                () => fn((row as HTMLElement).dataset.category as CategoryName)
            );
        });
    }

    bindBackToMenu(fn: () => void) {
        qs('#back-to-menu').addEventListener('click', () => fn());
    }

    categorySelected(category: string, playerIdx: number, score: number) {
        const row = qs(`[data-category="${category}"`);
        const cell = row.querySelector(`[data-player="${playerIdx}"]`)!;

        this.clearCategories();

        cell.classList.remove('zero');
        cell.classList.remove('potential');
        cell.textContent = score.toString();
    }

    updateTotals(
        playerIdx: number, 
        total: number, 
        upperBonus: number, 
        yahtzeeBonus: number, 
        upperTotal: number, 
        lowerTotal: number
    ) {
        qs(`#player-${playerIdx}-total`).textContent = total.toString();
        qs(`#player-${playerIdx}-upper-bonus`).textContent = upperBonus.toString();
        qs(`#player-${playerIdx}-yahtzee-bonus`).textContent = yahtzeeBonus.toString();
        qs(`#player-${playerIdx}-yahtzee-bonus`).textContent = yahtzeeBonus.toString();
        qs(`#player-${playerIdx}-upper-total-lower-card`).textContent = upperTotal + upperBonus.toString();
        qs(`#player-${playerIdx}-upper-total`).textContent = upperTotal + upperBonus.toString();
        qs(`#player-${playerIdx}-lower-total`).textContent = lowerTotal + yahtzeeBonus.toString();
    }
}
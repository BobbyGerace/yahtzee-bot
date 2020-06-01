import { qs } from './helpers.js';

export default class PlayerControlsView {
    constructor() {
        this.dieNodes = [...document.querySelectorAll('.die-list')];
        this.rollButton = qs('#roll-button');
        this.turnMessage = qs('#turn-message');
        this.helpText = qs('#help-text');
        this.actionMessage = qs('#action-message');
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
        
        const rollsMessage = 
            rollsLeft === 1 ? '1 roll left' : `${rollsLeft} rolls left`

        this.turnMessage.textContent = `${turnTitle} - ${rollsMessage}`;
    }

    setGameOver(players) {
        qs('.controls-container').classList.add('game-over');

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

            qs(`#p${i}-score`).textContent = `${possessive} score: ${p.score}`
        });
    }

    setHelpText(isBot, rollsLeft) {
        let helpMessage = '';
        if (isBot) helpMessage  = '';
        else if (rollsLeft === 3) helpMessage = 'Click the button to roll the dice';
        else if (rollsLeft < 1) helpMessage = 'Click a category to score';
        else helpMessage = 'Select dice to keep and roll again, or click a category to score';

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

        if (rollsLeft < 1) this.rollButton.disabled = true;
        else this.rollButton.disabled = false;

        if (rollsLeft === 3) this.rollButton.textContent = 'Roll dice';
        else this.rollButton.textContent = 'Roll again';
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
                if (resetKeeps) die.classList.remove('selected');
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
        qs('.controls-container').classList.remove('game-over');
        this.setActionMessage('');
        document.querySelectorAll('.score-message').forEach((s) => {
            s.textContent = '';
        });
    }
}
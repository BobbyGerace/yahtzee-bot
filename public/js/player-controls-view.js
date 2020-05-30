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
        this.setActionMessage('');

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

    rollReceived(newRoll) {
        let diceToRoll = 0;
        newRoll.forEach((dieValue, i) => {
            const die = this.dieNodes[i];

            if (die.classList.contains('selected')) {
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
}


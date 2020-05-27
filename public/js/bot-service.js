const noop = () => {};

export default class Bot {
    constructor() {
        this.cacheLoadedListener = noop;
        this.worker = new Worker('js/worker.js');

        this.worker.onmessage = (e) => {
            this.handleMessage(e.data);
        }

        setTimeout(() => {
            this.worker.postMessage({
                action: 'choose',
                roll: [0, 0, 5, 0, 0, 0],
                rollsLeft: 2,
                openCategories: ['yahtzee', 'five'],
                upperScore: 62,
                yahtzeeBonusAvailable: false
            });
        }, 2000)
    }

    bindCacheLoaded(fn) {
        this.cacheLoadedListener = fn;
    }

    handleMessage(data) {
        switch(data.message) {
            case 'cacheLoaded':
                this.cacheLoadedListener();
                break;
            default:
                break;
        }
    }
}
class Calculator {
    constructor(selector) {
        this.selector = selector;
        this.DOM = null;
        this.init();
    }

    init() {
        if (!this.isValidSelector() ||
            !this.findElementBySelector()) {
            return false;
        }


        this.render();

    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            return false;
        }
        return true;
    }

    findElementBySelector() {
        this.DOM = document.querySelector(this.selector);
        return !!this.DOM;
    }

    render() {
        const HTML = `<div class="main-container">
        <div class="screen">
            <div class="equation">1000/52*3+89</div>
            <div class="answer">300</div>
        </div>
        <div class="keyboard">
            <div class="button skaiciai ">C</div>
            <div class="button skaiciai simboliai">±</div>
            <div class="button skaiciai simboliai">%</div>
            <div class="button simboliai">+</div>
            <div class="button skaiciai">1</div>
            <div class="button skaiciai">2</div>
            <div class="button skaiciai">3</div>
            <div class="button simboliai">-</div>
            <div class="button skaiciai">4</div>
            <div class="button skaiciai">5</div>
            <div class="button skaiciai">6</div>
            <div class="button simboliai">X</div>
            <div class="button skaiciai">7</div>
            <div class="button skaiciai">8</div>
            <div class="button skaiciai">9</div>
            <div class="button">/</div>
            <div class="button skaiciai">0</div>
            <div class="button skaiciai simboliai">.</div>
            <div class="button ligybe simboliai">=</div>
        </div>
    </div>`
        this.DOM.innerHTML = HTML;

    }

    addEvents() {

    }

}

export { Calculator }
class Calculator {
    constructor(IDselector) {

        this.selector = IDselector;
        this.DOM = null;
        this.KeyboardDOM = null;

        this.Keyboard = [
            { title: 'C' },//1
            { title: '±' },//2
            { title: '%' },//3
            { title: '+' },//4
            { title: '1' },//5
            { title: '2' },//6
            { title: '3' },//7
            { title: '-' },//8
            { title: '4' },//9
            { title: '5' },//10
            { title: '6' },//11
            { title: 'x' },//12
            { title: '7' },//13
            { title: '8' },//14
            { title: '9' },//15
            { title: '/' },//16
            { title: '0' },//17
            { title: '.' },//18
            { title: '=' },//19
        ];
        this.answerInteger = 0;

        this.allButtonsDOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector() ||
            !this.findElementBySelector()) {
            return false;
        }
        this.render();
        this.renderButtons();
        this.addEvents();

    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            return console.error('ERROR: selector must to be non empty string');;
        }
        return true;
    }

    findElementBySelector() {
        this.DOM = document.getElementById(this.selector);
        return !!this.DOM;
    }

    generateCalcBody() {
        return `<div class="main-container">
                    <div class="screen">
                        <div id="equation" class="equation">1000/52*3+89</div>
                        <div id="answer"class="answer">300</div>
                    </div>
                    <div id="keyboard" class="keyboard"></div>
                </div>`
    }

    renderButtons() {
        let buttonsHTML = '';
        let idCount = 0;
        for (let i in this.Keyboard) {
            const buttonValue = this.Keyboard[i]
            ++idCount;
            buttonsHTML += `<button class="button" id="btn_${idCount}"type="submit" data-reiksme="${buttonValue.title}">${buttonValue.title}</button>`;
        }
        this.KeyboardDOM.innerHTML = buttonsHTML;

        this.allButtonsDOM = document.querySelectorAll('.button');
    }

    render() {
        let HTML = '';
        HTML += this.generateCalcBody();

        this.DOM.innerHTML = HTML;
        this.KeyboardDOM = document.getElementById('keyboard');


    }

    addEvents() {
        let equationDOM = document.getElementById('equation');
        let answerDOM = document.getElementById('answer');

        for (const value of this.allButtonsDOM) {
            const buttonValue = value.dataset.reiksme;

            const innitialScreenValue = 0;

            value.addEventListener('click', () => {
                if (buttonValue === 'C') {
                    equationDOM.innerText = innitialScreenValue;
                    answerDOM.innerText = innitialScreenValue;

                    this.answerInteger = 0;
                    console.log('nunulinta');
                    return;
                }
                if (buttonValue === '±') {
                    this.answerInteger = parseInt(answerDOM.innerText);
                    this.answerInteger *= -1;
                    answerDOM.innerText = this.answerInteger.toString();
                    console.log('negate');
                    return;
                }
                if (buttonValue === '=') {
                    console.log('skaiciuojam');
                    const sumableArray = equationDOM.innerText.split('+');
                    console.log(sumableArray);
                    this.answerInteger = 0;
                    for (const number of sumableArray) {
                        this.answerInteger += parseInt(number);
                    }
                    answerDOM.innerText = this.answerInteger.toString();
                    equationDOM.innerText = answerDOM.innerText;
                    return;
                }
                if (equationDOM.innerText === '0') {
                    equationDOM.innerText = buttonValue;
                }
                else {

                    equationDOM.innerText += buttonValue;
                }

            })
        };
    }

}

export { Calculator }
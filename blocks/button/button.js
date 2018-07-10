import Block from '../block';

export default class Button extends Block {

    get name() {
        return 'button';
    }

    /**
     * Кнопка
     * @param {Object} obj
     * @param {string} obj.text - текст кнопки
     * @param {string} [obj.type]
     */
    constructor({ text, type = 'button', className }) {
        super();

        this.el.textContent = text;
        this.el.classList.toggle('button');
        this.el.classList.toggle('pure-button');
        this.el.type = type;
        if(className) {this.el.classList.toggle(className);}
    }
}


import Block from '../block';

export default class Textarea extends Block {

    get name () {
        return 'textarea';
    }

    /**
     * Teztarea
     * @param {Object} obj
     * @param {string} obj.placeholder - введенный текст,
     */
    constructor({ placeholder, value='' }) {
        super();

        this.el.classList.toggle('textarea', true);
        this.el.placeholder = placeholder;
        this.el.value = value;
    }

}

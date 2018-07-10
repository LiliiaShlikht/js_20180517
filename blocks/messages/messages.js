import Block from '../block';

export default class Messages extends Block {

    get name() {
        return 'div';
    }

    /**
     * Messages
     * @param {Array} messages
     */
    constructor(messages) {
        super();

        this.el.classList.toggle('messages');

        let message = document.createElement('h1');
        message.innerHTML = 'Chat';
        this.el.appendChild(message);

        for(let mes of messages){
            let newMes = document.createElement('p');
            newMes.innerHTML = mes;
            this.el.appendChild(newMes);
        }
    }
}
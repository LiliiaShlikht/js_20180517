import Block from '../block';
import template from './message.pug';

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

        this.el.innerHTML = template({
            text: messages['text'],
            author: messages['author']
        });


        // let message = document.createElement('h1');
        // message.innerHTML = 'Chat';
        // this.el.appendChild(message);

        // for(let mes of messages){
        //     let newMes = document.createElement('p');
        //     newMes.innerHTML = mes;
        //     this.el.appendChild(newMes);
        // }
    }
}
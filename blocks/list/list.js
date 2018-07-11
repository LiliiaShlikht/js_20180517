import Block from '../block';

export default class List extends Block {

    get name () {
        return 'ul';
    }

    /**
     * List
     * @param {Array} users
     */
    constructor( users = [] ) {
        super();

        this.el.classList.toggle('ulList');
        this.el.classList.toggle('li');

        for(let user of users){
            let userName = document.createElement('li');
            userName.innerHTML = user;
            this.el.appendChild(userName);
        }
    }
}

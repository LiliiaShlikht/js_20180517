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

        for(let user of users){
            let userName = document.createElement('li');
            userName.innerHTML = user;
            this.el.appendChild(userName);
        }
    }
}

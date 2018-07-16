import Button from './blocks/button/button';
import Input from './blocks/input/input';
import List from './blocks/list/list';
import Textarea from './blocks/textarea/textarea';
import Messages from './blocks/messages/messages';

window.addEventListener('DOMContentLoaded', function () {

    let buttonLogin = new Button({
        text: 'Login',
        className: 'button-success'
    });

    let buttonReg = new Button({
        text: 'Registration',
        className: 'button-secondary'
    });

    let inputEmail = new Input({
        placeholder: 'Email'
    });

    let inputPassword = new Input({
        placeholder: 'Password'
    });

    let list = new List (["Alex", "Max", "Bob", "Den"]);

    let textarea = new Textarea ({
        placeholder: 'Введите сюда свое сообщение'
    });

    let messages = new Messages({text:"Мое сообщение", author: "Liliya", myMessage: true});

    buttonLogin.append(document.body);
    buttonReg.append(document.body);
    inputEmail.append(document.getElementById('formInput'));
    inputPassword.append(document.getElementById('formInput'));
    messages.append(document.body);
    textarea.append(document.body);
    list.append(document.body);

});



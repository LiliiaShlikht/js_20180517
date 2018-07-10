import Button from './blocks/button/button';
import Input from './blocks/input/input';
import List from './blocks/list/list';
import Textarea from './blocks/textarea/textarea';
import Messages from './blocks/messages/messages';
console.log('first');
window.addEventListener('DOMContentLoaded', function () {
    console.log('hello');
    let button = new Button({
        text: 'Тестовая кнопка'
    });

    let primaryButton = new Button({
        text: 'button',
        className: 'button-success'
    });

    let warningButton = new Button({
        text: 'button',
        className: 'button-warning'
    });

    let input = new Input({
        placeholder: 'Тестовый инпут'
    });

    let list = new List (["Alex", "Max", "Bob", "Den"]);

    let textarea = new Textarea ({
        placeholder: 'Введите сюда свое сообщение'
    });

    let messages = new Messages(["New message", "One more message"]);

    button.append(document.body);
    primaryButton.append(document.body);
    warningButton.append(document.body);
    input.append(document.body);
    list.append(document.body);
    textarea.append(document.body);
    messages.append(document.body);
});



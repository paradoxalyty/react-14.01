import React from 'react';
import Message from './Message';
import '../styles/styles.css';

//Кнопка отправки сообщения а так же сами сообщения в качестве дочерних элементов
export default class MessageField extends React.Component {
 //Храним тексты сообщений в массиве, добавляя к нему элементы
state = {
    messages: [{ text: "Привет!", sender: 'bot' }, { text: "Как дела?", sender: 'bot' }],
};

componentDidUpdate() {
    if (this.state.messages[this.state.messages.length - 1].sender === 'me') { // Если последний элемент в массиве равени имени автора, то запускаем ответ
        setTimeout(() =>
                this.setState({
                    messages: [ ...this.state.messages, {text: 'Не лезь, ко мне, я занят', sender: 'bot'} ] }),
            1000);
    }
}
//Отправка сообщений автора
handleClick = () => {
    this.setState({ messages: [ ...this.state.messages, {text: 'Отлично', sender: 'me'} ] });
};

//Рендер и запрос класса из Message
render() {
    const messageElements = this.state.messages.map((text, sender) =>      
     (<Message key={sender} text {...text}/>));
      

    return <div id='main' className='message-field'>
        { messageElements }
        <button onClick={ this.handleClick }>Отправить сообщение</button>
    </div>
}
}

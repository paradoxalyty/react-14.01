import React from 'react';
import Message from './Message';
//Импортируем файл со стилями
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
// handleClick = () => {
//     this.setState({ messages: [ ...this.state.messages, {text: 'Отлично', sender: 'me'} ] });
// };
// Передаем сообщение в качестве аргумента функции
    handleClick = (message) => {
        this.setState({ messages: [ ...this.state.messages, {text: message, sender: 'me'} ] });
    };
    //Регистрируем изменения в текстовом поле
    handleChange = (event) => {
        console.log(event.target.value);
     };
     //Обработчик отправки сообщений по enter
     handleKeyUp = (event, message) => {
         console.log(event.keyCode); //Тест кодов клавиш
        if (event.keyCode === 13) { 
            this.setState({ messages: [ ...this.state.messages, {text: message, sender: 'me'} ] });
        }
     };

//Рендер и запрос класса из Message
render() {
    const messageElements = this.state.messages.map((text, sender) =>      
     (<Message key={sender} text {...text}/>));
      
     return <div className="layout">
     <div className="message-field">
        { messageElements }
        </div>
        {/* Создаем текстовое поле для ввода сообщений и подключаем обработчик нажатия enteк */}
        <input onChange={ this.handleChange } onKeyUp={ (event) => this.handleKeyUp(event, 'Нормально') } />
        {/* <button onClick={ this.handleClick }>Отправить сообщение</button> */}
        {/* Пишем промежуточную стрелочную функцию, чтобы handleclick не вызывался раньше времени */}
        <button onClick={ () => this.handleClick('Нормально') }>Отправить сообщение</button>
    </div>
}
}


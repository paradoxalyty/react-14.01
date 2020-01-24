import React from 'react';
import Message from './Message';

//Пример из
// export default class MessageField extends React.Component {
//    state = {
//        //Храним тексты сообщений в массиве, добавляя к нему элементы
//        messages: ["Привет!", "Как дела?"]
//    };

// componentDidUpdate() {
//     if (this.state.messages[this.state.messages.length-1] == "Нормально") {  // Если последний элемент в массиве-"Нормально", то запускаем ответ
//         setTimeout(() =>
//         this.setState(
//             { messages: [ ...this.state.messages, 'Не приставай ко мне, я робот!' ] }),
//         1500);
//     }
// }

//    handleClick = () => {
//        this.setState({ messages: [ ...this.state.messages, 'Нормально' ] });
//    };

//    render() {
//        const messageElements = this.state.messages.map((text, index) => (
//            <Message key={ index } text={ text } />));

//        return <div>
//            { messageElements }
//            <button onClick={ this.handleClick }>Отправить сообщение</button>
//        </div>
//    }
// }

//Кнопка отправки сообщения а так же сами сообщения в качестве дочерних элементов
export default class MessageField extends React.Component {
    state = {
        //Храним тексты сообщений в массиве, добавляя к нему элементы
        messages: [
            {name:"Jack", content:"Привет"},
            {name:"Jack", content:"Как дела?"},
        ]
    };


    handleClick = () => {
        this.setState(({messages}) => ({messages: [...messages, {name: 'Jill', content: 'Отлично'}] }));
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length-1].name == "Jill") {// Если последний элемент в массиве равени имени автора, то запускаем ответ
            setTimeout(() => {
                this.setState(({messages}) => ({messages: [...messages, {name: 'Robot', content: 'Не лезь, ко мне, я занят'}] }))
            },1500);
        }
    }

render() {
    const MessageElements = this.state.messages.map((text,index) => 
    (<Message key={index} text {...text}/>));

    return <>
        {MessageElements} 
        <button onClick={this.handleClick}>Send Message</button>
    </>
    }
}
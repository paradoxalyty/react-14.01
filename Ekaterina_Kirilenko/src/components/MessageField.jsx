import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component {
  state = {
    messages: [
      { name: "Катя", content: "Доброе утро!" },
      { name: "Максим", content: "Привет!" },
      { name: "Катя", content: "Как дела?" },
    ]
  };

  componentDidUpdate() {
    console.log("компонент был обновлен");
    if (this.state.messages.length % 2 === 1) {  
      setTimeout(() =>
        this.setState(
          { messages: [...this.state.messages, { name: "Катя", content: 'Не приставай ко мне, я робот!'}] }),
        1000);
    }   
  }

  handleClick = () => {
    this.setState({ messages: [...this.state.messages, { name: "Максим", content: "Нормально! А у тебя?" }] });
  }; 

  render() {
    const messageList = this.state.messages.map((message, index) => (
      <Message {...message} key={index} />));

    return <div>
      {messageList}
      <button onClick={this.handleClick}>Отправить сообщение</button>
    </div>
  }
}
import React from 'react';
import Message from './Message';

const messageBot = [
  "Не приставай ко мне!",
  "Я робот!",
  "Да да, я робот!",
  "Я робот и точка.",
  "Ой всё!"
];

export default class MessageField extends React.Component {
  state = {
    messages: [
      { name: "Катя", content: "Доброе утро!" },
      { name: "Максим", content: "Привет!" },
      { name: "Катя", content: "Как дела?" },
    ],
    pauseBot: false
  };

  componentDidUpdate() {
    console.log("компонент был обновлен");
    if (this.state.pauseBot == false) { 
      setTimeout(() =>
        this.setState(
          { messages: [...this.state.messages, { name: "Бот", content: messageBot[Math.floor(Math.random() * messageBot.length)]}] }),
        2000);
    } 
  };

  offBot = () => this.setState(({ pauseBot }) => ({ pauseBot: true}));

  handleClick = () => {
    this.setState({ messages: [...this.state.messages, { name: "Максим", content: "Нормально! А у тебя?" }] });
    this.setState(({ pauseBot }) => ({ pauseBot: false }));
  }; 

  render() {
    const messageList = this.state.messages.map((message, index) => (
      <Message {...message} key={index} />));

    return <div>
      {messageList}
      <br />
      <button onClick={this.handleClick}>Отправить сообщение</button>
      <br /><br />
      <button onClick={this.offBot}>Отключить бота</button>
    </div>
  }
}
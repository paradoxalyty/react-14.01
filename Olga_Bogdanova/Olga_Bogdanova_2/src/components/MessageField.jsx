import React from "react";
import Message from './Message';

export default class MessageField extends React.Component {
  state = {
    messages: [

    ]
  };

  handleClick = () => {
    this.setState({ messages: [...this.state.messages, { name: "Olga: ", content:  "Hello!" }] })
  };
  componentDidUpdate() {
    if (this.state.messages.length % 2 === 1) {
      setTimeout(() =>
        this.setState(
          { messages: [...this.state.messages, { name: 'Robot ', content: 'hi, Olga!' }] }), 1000)
    }
  }

  render() {
    const messageElements = this.state.messages.map((message, index) => (
      <Message {...message} key={index} />));

    return <div>
      {messageElements}
      <button onClick={this.handleClick}>Отправить сообщение</button>

    </div>

  }
}
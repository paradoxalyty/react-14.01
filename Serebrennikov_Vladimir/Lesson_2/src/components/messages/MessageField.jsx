import React, {Component} from "react";
import Message from "./Message.jsx"
import MessageSender from "./MessageSender.jsx"

export default class MessageField extends Component {
  
  state = {
    messages: [
      {name: "Я", text: "Как дела?"},
      {name: "Робот", text: "Нормально. Как у тебя?"},
      {name: "Я", text: "Тоже."},
      {name: "Робот", text: "Пока Alex."},
      {name: "Я", text: "Пока Serg."}
    ],
    doNotUpdate: false
  };

  componentDidUpdate() {
    if (this.state.doNotUpdate) {
      this.setState({ 
        messages: [ ...this.state.messages, {name: "Робот", text: "Я устал, ты мне надоел"} ],
        doNotUpdate: false
      });
    }
  }

  handleSubmit = (text) => {
    this.setState({ 
      messages: [ ...this.state.messages, {name: "Я", text: text} ],
      doNotUpdate: true
    });
  }

  render() {

    const MessageElements = this.state.messages.map((message, index) => <Message {...message} key={index}/>);

    return (
      <div>
        { MessageElements }
        <MessageSender handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
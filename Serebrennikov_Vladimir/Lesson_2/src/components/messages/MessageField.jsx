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
      {name: "Я", text: "Пока Робот."}
    ]
  };

  componentDidUpdate() {
    if (this.state.messages[ this.state.messages.length - 1 ].name != "Робот") {
        // или как в методичке на каждое четное по номеру сообщение "%2" отвечает "Робот"
        
      this.setState({ messages: [...this.state.messages, {name: "Робот", text: "Не пиши мне"}] });
    }
  }

  handleSubmit = (text) => {
    this.setState({ messages: [...this.state.messages, {name: "Я", text: text}] });
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
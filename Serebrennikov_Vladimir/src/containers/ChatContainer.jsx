import React, {Component} from "react";
import MessageSender from "../components/MessageSender/MessageSender.jsx"
import {MessageField} from "../components/MessageField/MessageField.jsx"

export default class ChatContainer extends Component {
  
  state = {
    messages: [
      {name: "Я", text: "Как дела?"},
      {name: "Робот", text: "ОК. Как у тебя?", sender: "bot"},
      {name: "Я", text: "Тоже."}
    ]
  };

  componentDidUpdate() {
    if (this.state.messages[ this.state.messages.length - 1 ].name != "Робот") {
      setTimeout(() =>
        this.setState({ 
          messages: [...this.state.messages, {name: "Робот", text: "Я здесь", sender: "bot"}] 
        }), 1000);
    }
  }

  handleSubmit = (text) => {
    this.setState({ 
      messages: [...this.state.messages, {name: "Я", text: text}]
    });
  }

  render() {
    return (
      <div>
        <MessageField messages={this.state.messages} />
        <MessageSender handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
import React, {Component} from "react";
import MessageSender from "../components/MessageSender/MessageSender.jsx"
import MessageField from "../components/MessageField/MessageField.jsx"

export default class ChatContainer extends Component {
  
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

      this.setState({ 
        messages: [...this.state.messages, {name: "Робот", text: "Не пиши мне"}] 
      });
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
        <MessageField messages={this.state.messages}/>
        <MessageSender handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
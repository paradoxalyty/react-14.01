import React, { Component } from "react";
import { Chat } from "../components/Chat/Chat";

const robot = {
  name: "Робот",
  content: "Привет! Я робот."
};

export class ChatContainer extends Component {
  state = {
    messages: [
      { name: "Иван", content: "Привет!" },
      { name: "Петр", content: "Привет, как дела?" },
      { name: "Иван", content: "Хорошо, спасибо." }
    ]
  };

  componentDidUpdate() {
    const lastMessage = this.state.messages[this.state.messages.length - 1];
    if (lastMessage.name !== robot.name) {
      setTimeout(
        () =>
          this.handleSendMessage({ name: robot.name, content: robot.content }),
        500
      );
    }
  }

  handleSendMessage = message => {
    this.setState(state => ({ messages: [...state.messages, message] }));
  };

  render() {
    const { messages } = this.state;
    return <Chat {...{ messages, onSendMessage: this.handleSendMessage }} />;
  }
}

import React, { Component } from "react";
import { Chat } from "../components/Chat/Chat";

const ROBOT_NAME = 'Робот';

export class ChatContainer extends Component {
  state = {
    messages: [
      { author: "Катя", content: "Доброе утро!" },
      { author: "Робот", content: "Привет!" },
      { author: "Катя", content: "Как дела?" },
      { author: "Робот", content: "Нормально ))" },
    ],
  }

  componentDidUpdate() {
    const lastMessage = this.state.messages[this.state.messages.length - 1];

    if (lastMessage.author !== ROBOT_NAME) {
      setTimeout(() => this.handleSendMessage({ author: ROBOT_NAME, content: "Я робот!"}), 1000);
    }
  }

  handleSendMessage = (message) => {
    this.setState((state) => ({messages: [...state.messages, message]}))
  }

  render() {
    const { messages } = this.state;
    return <Chat {...{ messages, onSendMessage: this.handleSendMessage }} />
  }
}
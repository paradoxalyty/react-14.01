import React, { Component } from "react";
import { Chat } from "../components/Chat/Chat";

const robot = {
  name: "Робот",
  content: "Привет! Я робот."
};

export class ChatContainer extends Component {
  state = {
    chats: {
      1: {
        name: "Чат 1",
        messages: [
          { name: "Иван", content: "Привет!" },
          { name: "Петр", content: "Привет, как дела?" },
          { name: "Иван", content: "Хорошо, спасибо." }
        ]
      },
      2: {
        name: "Чат 2",
        messages: [
          { name: "Иван", content: "Привет!" },
          { name: "Иван", content: "Как дела?" }
        ]
      },
      3: {
        name: "Чат 2",
        messages: []
      }
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { chats } = this.state;
    const { id } = this.props.match.params;
    if (id && chats[id]) {
      const messages = this.state.chats[id].messages;
      const lastMessage = messages[messages.length - 1];
      const prevMessages = prevState.chats[id].messages;
      const prevStateLengthMessages = prevState.chats[id].messages.length;
      const prevLastMessage = prevMessages[prevMessages.length - 1];
      if (
        lastMessage &&
        lastMessage.name === "Я" &&
        (!prevStateLengthMessages || prevLastMessage.name !== "Я")
      ) {
        setTimeout(
          () =>
            this.handleSendMessage(id)({
              name: robot.name,
              content: robot.content
            }),
          500
        );
      }
    }
  }

  handleSendMessage = id => message => {
    this.setState(state => ({
      chats: {
        ...state.chats,
        [id]: {
          name: state.chats[id].name,
          messages: [...state.chats[id].messages, message]
        }
      }
    }));
  };

  render() {
    const { chats } = this.state;
    const { id } = this.props.match.params;
    if (id && chats[id]) {
      return (
        <Chat
          {...{
            messages: chats[id].messages,
            onSendMessage: this.handleSendMessage(id)
          }}
        />
      );
    } else {
      return <span>Необходимо выбрать чат.</span>;
    }
  }
}

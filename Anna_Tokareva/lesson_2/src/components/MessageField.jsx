import React, { Component } from "react";
import ReactDom from "react-dom";
import { MessageList } from "./MessageList";

export class MessageField extends Component {
  state = {
    messages: this.props.messages,
    fixedMessage: {
      name: "Я",
      content: "Привет!!!"
    },
    robotsAnswer: {
      name: "Робот",
      content: "Кто здесь?"
    }
  };

  componentDidUpdate() {
    let lastMessageName = this.state.messages[this.state.messages.length - 1]
      .name;
    if (lastMessageName !== "Робот") {
      setTimeout(() => {
        this.setState(state => {
          state.messages.push(state.robotsAnswer);
          return { messages: state.messages };
        });
      }, 500);
    }
  }
  sendFixedMessage = () => {
    this.setState(state => {
      state.messages.push(state.fixedMessage);
      return { messages: state.messages };
    });
  };
  render() {
    return (
      <>
        <MessageList messages={this.state.messages} />
        <button onClick={this.sendFixedMessage}>Сказать "Привет!!!"</button>
      </>
    );
  }
}

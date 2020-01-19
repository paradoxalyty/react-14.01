import React, { Component } from "react";
import { Message } from "./Message";

export class MessageList extends Component {
  state = {
    messages: this.props.messages
  };

  render() {
    return this.state.messages.map((message, index) => (
      <Message name={message.name} content={message.content} key={index} />
    ));
  }
}

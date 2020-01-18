import React, { Component } from "react";

export class Message extends Component {
  state = {
    name: this.props.name,
    content: this.props.content
  };

  render() {
    return (
      <div>
        <strong>{this.state.name}: </strong>
        {this.state.content}
      </div>
    );
  }
}

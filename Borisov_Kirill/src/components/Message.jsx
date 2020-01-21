import React from "react";

export default class Message extends React.Component {

  state = {
      name: this.props.name,
      content: this.props.content
  }
  
  render() {
    return (
      <div><strong>{this.state.name}:</strong> {this.state.content}</div>
    );
  }
}

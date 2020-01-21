import React, {Component} from "react";

export default class Message extends Component {
  render() {
    return <div><strong>{this.props.name}:</strong> {this.props.content}</div>;
  }
}
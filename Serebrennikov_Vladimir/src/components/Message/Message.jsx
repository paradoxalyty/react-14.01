import React, {Component} from "react";
import './Message.css';

export default class Message extends Component {
  
  render() {
    return <div className='Message'><strong>{this.props.name}:</strong> {this.props.text}</div>;
  }
}
import React from "react";
import ReactDom from "react-dom";
import Message from "./Message";

export default class MessageList extends React.Component{
    render() {
        return this.props.messages.map((message, index) => <Message {...message} key={index} />);
    }
}
import React from "react";
import ReactDom from "react-dom";
import Message from "message";

export default class MessageList extends React.Component{
    render() {
        //return messages.map((message, index)=><Message name={message.name} content={message.content} key={index}/>);
        console.log('messageList IS WORKING', this.props.messages);
        return this.props.messages.map((message, index) => <Message {...message} key={index} />);
    }
}
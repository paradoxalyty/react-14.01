import React, { Component } from "react";
import { Message } from './Message';
import { ButtonSend } from './ButtonSend';

class MessageList extends Component {
    state = {
        messages: [
            {name: "Kolya", content: "Hello!"},
            {name: "Olya", content: "Hi! How are you?"},
            {name: "Kolya", content: "I am well"}
        ]
    }
    handleMessage = (record) => {
        this.setState (() => ({messages: this.state.messages.concat(record)}));
    }
    render () {
        console.log (this.state.messages);
        return <>
            <ButtonSend onSend={ this.handleMessage } />
            { this.state.messages.map ((message, index) => <Message {...message} key = { index } />)}
        </>
    }
}

// const MessageList = ({messages}) => {
//     // return messages.map ((message, index) => <Message name = { message.name } content = { message.content } key = { index } />);
//     return <div>
//             <ButtonSend messages = { messages } />
//             { messages.map ((message, index) => <Message {...message} key = { index } />)}
//           </div>;
// }

export {MessageList};
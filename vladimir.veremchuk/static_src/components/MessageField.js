import React from "react";
import Message from './Message.js';

function MessageList({messages}) {
    return messages.map((message, index) => <Message {...message} key={index}/>)
}

export default MessageList;
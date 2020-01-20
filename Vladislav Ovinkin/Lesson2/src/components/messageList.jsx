import React from "react";
import { Message } from './Message';
import { ButtonSend } from './ButtonSend';

const MessageList = ({messages}) => {
    // return messages.map ((message, index) => <Message name = { message.name } content = { message.content } key = { index } />);
    return <div>
            <ButtonSend messages = { messages } />
            { messages.map ((message, index) => <Message {...message} key = { index } />)}
          </div>;
}

export default MessageList;
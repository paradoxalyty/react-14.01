import React from "react";
import { Message } from './Message.jsx';
import { ButtonSend } from './ButtonSend.jsx';

const MessageList = ({messages}) => {
    // return messages.map ((message, index) => <Message name = { message.name } content = { message.content } key = { index } />);
    return <div>
            <ButtonSend messages = { messages } />
            { messages.map ((message, index) => <Message {...message} key = { index } />)}
          </div>;
}

export { MessageList };
import React from "react";
import ReactDom from "react-dom";
import { Message } from './message';
import { messages } from './message';

export const MessageList = ({messages}) => {
    return messages.map((message, index) => <Message {...message} key = {index}/>)
}

export const sendMessage = () => {
    const newMessage = {name: "Nick", content: "new text"};
    messages.push(newMessage);
    console.log(messages);
    const robotMessage = {name: "Robot", content: "Robot answer"};
    messages.push(robotMessage);
    console.log(messages);
    ReactDom.render(
        <MessageList messages={messages}/>, 
        document.getElementById("root")
        );
};
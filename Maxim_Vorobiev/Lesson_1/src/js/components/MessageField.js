import React from "react";
import {Message} from "./Message";

export function MessageList({messages}) {
    return messages.map((message, index) => <Message name={message.name} content={message.content} key={index}/>);
}
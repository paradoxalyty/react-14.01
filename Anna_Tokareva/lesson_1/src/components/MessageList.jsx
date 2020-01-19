import React from "react";
import { Message } from "./Message";

export const MessageList = ({ messages }) => {
  return messages.map((message, index) => (
    <Message name={message.name} content={message.content} key={index} />
  ));
};

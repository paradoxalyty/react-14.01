import React from "react";
import PropTypes from "prop-types";
import { Message } from "../Message/Message";
import { MessageField } from "../MessageField/MessageField";
import { ChatForm } from "../ChatForm/ChatForm";
import { ChatList } from "../ChatList/ChatList";
import "./Chat.css";

export const Chat = ({ messages, onSendMessage }) => (
  <div className="Chat">
    <ChatList className="ChatList-Position" />
    <div className="ChatField-Position">
      <MessageField messages={messages} />
      <ChatForm onSendMessage={onSendMessage} />
    </div>
  </div>
);

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message.PropTypes)),
  onSendMessage: PropTypes.func.isRequired
};

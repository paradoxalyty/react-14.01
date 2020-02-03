import React from "react";
import PropTypes from "prop-types";
import { Message } from "../Message/Message";
import { MessageField } from "../MessageField/MessageField";
import { ChatForm } from "../ChatForm/ChatForm";

export const Chat = ({ messages, onSendMessage }) => (
  <>
    <MessageField messages={messages} />
    <ChatForm onSendMessage={onSendMessage} />
  </>
);

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message.PropTypes)),
  onSendMessage: PropTypes.func.isRequired
};

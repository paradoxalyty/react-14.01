import React from 'react';
import PropTypes from 'prop-types';
import { MessageField } from '../MessageField/MessageField';
import { Message } from '../Message/Message';
import { ChatForm } from '../ChatForm/ChatForm';


export const Chat = ({ messages, message, author, onSendMessage }) => (
  <div>
    <MessageField messages={messages}/>
    <ChatForm onSendMessage={onSendMessage} />
    {/* <ChatForm {...{ message, name, onSendMessage }} /> */}
  </div>
);

ChatForm.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
  // message: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  onSendMessage: PropTypes.func.isRequired,
}
import React from 'react';
import PropTypes from 'prop-types';
import { MessageField } from '../MessageField/MessageField.jsx';
import { Message } from '../Message/Message.jsx';
import { ChatForm } from '../ChatForm/ChatForm.jsx';


export const Chat = ({ messages, onSendMessage }) =>
    (<div className="Chat">
        <MessageField messages={messages} />
        <ChatForm onSendMessage={onSendMessage} />
    </div>);

Chat.propTypes = {
    
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired
}
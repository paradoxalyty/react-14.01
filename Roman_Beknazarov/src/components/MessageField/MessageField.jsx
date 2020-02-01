import React from 'react';
import PropTypes from 'prop-types';
import { Message } from "../Message/Message";
import './MessageField.css';
import {ChatForm} from "../ChatForm/ChatForm";

export const MessageField = ({messages, onSendMessage}) =>
    (<div className='MessageField'>
        <div className="messages">
            {messages.map((message, index) => <Message {...message} key={index}/>)}
        </div>
        <ChatForm onSendMessage={onSendMessage}/>
    </div>);

MessageField.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired,
};
import React from 'react';
import {Message} from '../Message/Message';
import PropTypes from 'prop-types';
import './MessageField.css';

export const MessageField = ({messages}) => (
    <div className="react-messenger__messages">
        {messages.map((message, index) => <Message key={index} name={message.name} content={message.content}/>)}
    </div>
);

MessageField.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
};

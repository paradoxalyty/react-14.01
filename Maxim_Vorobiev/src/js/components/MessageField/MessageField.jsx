import React from 'react';
import {Message} from '../Message/Message';
import PropTypes from 'prop-types';

export const MessageField = ({messages}) => (
    messages.map((message, index) => <Message key={index} name={message.name} content={message.content}/>)
);

MessageField.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
};

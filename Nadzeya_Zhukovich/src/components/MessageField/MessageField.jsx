import React from "react";
import {Message} from "../Message/Message";
import PropTypes from 'prop-types';
import './MessageField.scss';

/**
 * Component driving collection of message components
 * @param {Array} messages Array of objects
 */

export const MessageField = ({ messages }) =>
    (<div className={'message-field'}>
        {messages.map((message, index) =>
        <Message {...message} key={index}/>)}
    </div>);

MessageField.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
};

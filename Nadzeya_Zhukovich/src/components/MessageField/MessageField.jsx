import React from "react";
import {Message} from "../Message/Message";
import PropTypes from 'prop-types';

/**
 * Component driving collection of message components
 * @param {Array} messages Array of objects
 */

export const MessageField = ({ messages }) =>
    (messages.map((message, index) =>
        <Message {...message} key={index}/>));

MessageField.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
};

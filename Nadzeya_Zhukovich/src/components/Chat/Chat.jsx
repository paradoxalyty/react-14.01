import React from "react";
import PropTypes from 'prop-types';
import {MessageField} from '../MessageField/MessageField';
import {ChatForm} from '../ChatForm/ChatForm';
import {Message} from "../Message/Message";
import './Chat.scss';

export const Chat = ({ messages, onSentMessage }) =>
    (
        <div className={'chat'}>
            <MessageField messages={messages}/>
            <ChatForm onSentMessage={onSentMessage}/>
        </div>
    );

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSentMessage: PropTypes.func.isRequired
};

/**
 * Component for drawing chat and chat fotm
 * @param {array} messages Array of objects of message
 * @param {function} onSentMessage Sending name and message of user
 */

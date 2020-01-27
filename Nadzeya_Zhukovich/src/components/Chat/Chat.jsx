import React from "react";
import PropTypes from 'prop-types';
import {MessageField} from '../MessageField/MessageField';
import {ChatForm} from '../ChatForm/ChatForm';
import {Message} from "../Message/Message";

export const Chat = ({ messages, onSentMessage }) =>
    (
        <div>
            <MessageField messages={messages}/>
            <ChatForm onSentMessage={onSentMessage}/>
        </div>
    );

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSentMessage: PropTypes.func.isRequired
}

import React from 'react';
import {Message} from '../Message/Message';
import PropTypes from 'prop-types';
import './MessageField.css';

export const MessageField = ({messages, chats, chatId}) => (
    <div className="react-messenger__messages">
        {chats[chatId].messageList.map(
            (messageId, index) => (
                <Message
                    key={index}
                    name={messages[messageId].name}
                    content={messages[messageId].content}
                />
            )
        )}
    </div>
);

MessageField.propTypes = {
    messages: PropTypes.objectOf(PropTypes.shape(Message.propTypes)),
};
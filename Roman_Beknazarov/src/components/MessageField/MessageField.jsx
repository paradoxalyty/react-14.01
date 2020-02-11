import React from 'react';
import PropTypes from 'prop-types';
import { Message } from "../Message/Message";
import './MessageField.css';
import {ChatForm} from "../ChatForm/ChatForm";

export const MessageField = ({messages, onSendMessage, }) => {
    if(messages) {
        return (<div className='MessageField mainBlock'>
            <div className="messages">
                {messages.map((message, index) => <Message {...message} key={index}/>)}
            </div>
            <ChatForm onSendMessage={onSendMessage}/>
        </div>);
    } else {
        return <div className="404 mainBlock">Chat does not exist</div>
    }
};

MessageField.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired,
};
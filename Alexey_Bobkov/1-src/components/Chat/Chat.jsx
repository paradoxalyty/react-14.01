import React from 'react';
import PropTypes from 'prop-types';
import MessageField from '../MessageField/MessageField.jsx'
import ChatForm from '../ChatForm/ChatForm.jsx'

export const Chat = ({message, name, onSendMessage}) =>
(<div>
    <MessageField message={messages}/>
    <ChatForm {...{message, name, onSendMessage}}/>
</div>);

Chat.propTypes ={
    message: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    name: PropTypes.string.isRequired,
    onSendMessage: PropTypes.func.isRequired
}
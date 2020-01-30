import React from 'react';
import PropTypes from 'prop-types';
import {MessageField} from '../MessageField/MessageField';
import {Message} from '../Message/Message';
import {ChatForm} from '../ChatForm/ChatForm';

export const Chat = ({messages, message, name, onSendMessage}) =>
(<div>
    <MessageField messages={messages}/>
    <ChatForm onSendMessage={onSendMessage}/>
</div>);

Chat.PropTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired
}

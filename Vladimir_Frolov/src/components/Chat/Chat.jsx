import React from 'react';
import {MessageField} from '../MessageField/MessageField'
import {ChatForm} from '../ChatForm/ChatForm'

export const Chat = ({messages, message, name, onSendMessage}) =>
    (<div>
        <MessageField messages={messages}/>
        <ChatForm addNewMessage={onSendMessage}/>
    </div>);
import React from 'react';
import {MessageField} from '../MessageField/MessageField.jsx'
import {ChatForm} from '../ChatForm/ChatForm.jsx'

export const Chat = ({messages, onSendMessage}) =>  
    (<div>
        <MessageField messages={messages}/>
        <ChatForm onSendMessage={onSendMessage}/>
    </div>);
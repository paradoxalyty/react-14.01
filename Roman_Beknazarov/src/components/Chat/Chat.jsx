import React from 'react';
import {MessageField} from '../MessageField/MessageField';
import {ChatForm} from '../ChatForm/ChatForm';

import './Chat.css';

export const Chat = ({messages, onSendMessage}) => {
    if (messages) {
        return (<div className="mainBlock">
            <MessageField messages={messages}/>
            <ChatForm onSendMessage={onSendMessage}/>
        </div>);
    } else {
        return <div className="404 mainBlock">Chat does not exist</div>
    }
};

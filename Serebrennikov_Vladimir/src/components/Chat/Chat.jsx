import React from 'react';
import {MessageField} from '../MessageField/MessageField'
import {MessageSender} from '../MessageSender/MessageSender'

export const Chat = ({messages, onSendMessage}) => {

    if(messages){
        return  (<div>
            <MessageField messages={messages}/>
            <MessageSender onSendMessage={onSendMessage}/>
        </div>);
    }else{
        return <span>Вы не выбрали чат</span>
    }
}

export default Chat;
   
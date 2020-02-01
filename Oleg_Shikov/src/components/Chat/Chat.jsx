import React from 'react';
import PropTypes from 'prop-types';
import {MessageField} from '../MessageField/MessageField'
import {Message} from '../Message/Message'
import {ChatForm} from '../ChatForm/ChatForm'

export const Chat = ({messages, onSendMessage}) => {

    if(messages){
        return  (<div>
            <MessageField messages={messages}/>
            <ChatForm onSendMessage={onSendMessage}/>
        </div>);
    }else{
        return <span>Вы не выбрали чат</span>
    }
    
}
   

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired
}
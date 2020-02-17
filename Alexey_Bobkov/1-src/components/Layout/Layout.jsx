
import React from 'react';
import PropTypes from 'prop-types';
import './Layout.sass';
import { Header } from '../Header/Header.jsx';
import { MessageField } from '../MessageField/MessageField.jsx';
import { Message } from '../Message/Message.jsx';
import { ChatForm } from '../ChatForm/ChatForm';

export const Layout = ({ messages, onSendMessage, chatName }) => {
    return (
        (<div className='Layout'>
<<<<<<< HEAD
            <Header headerChat={chats} />
            <ChatList chats={chats} />
=======

            <Header chatName={chatName} />
>>>>>>> 235c223bbc3e6f655feb0dc3d383580e7d179fda
            <MessageField messages={messages} />
            <ChatForm onSendMessage={onSendMessage} />

        </div>)
    )
}



Layout.propTypes = {

    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired
}
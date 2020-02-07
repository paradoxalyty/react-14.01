import React from 'react';
import PropTypes from 'prop-types';
import './Layout.sass';
import { Header } from '../Header/Header.jsx';
import { ChatList } from '../ChatList/ChatList.jsx';
import { MessageField } from '../MessageField/MessageField.jsx';
import { Message } from '../Message/Message.jsx';
import { ChatForm } from '../ChatForm/ChatForm';

export const Layout = ({ messages, onSendMessage, chats}) =>

    (<div className='Layout'>
        <Header />
        <ChatList chats={chats} />
        <MessageField messages={messages} />
        <ChatForm onSendMessage={onSendMessage} />

    </div>);


Layout.propTypes = {

    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired
}
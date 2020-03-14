
import React from 'react';
import PropTypes from 'prop-types';
import './Layout.sass';
import { Header } from '../Header/Header.jsx';
import { MessageField } from '../MessageField/MessageField.jsx';
import { Message } from '../Message/Message.jsx';
import { ChatForm } from '../ChatForm/ChatForm';
import ChatListContainer from '../../containers/ChatListContainer';
import { CircularProgress } from '@material-ui/core';


export const Layout = ({ isLoading, messages, onSendMessage, chatName }) => {


    return (
        (<div className='Layout'>
            <Header chatName={chatName} />
            <ChatListContainer />
            <MessageField messages={messages} isLoading={isLoading} />
            <ChatForm onSendMessage={onSendMessage} />
        </div>)
    )
}



Layout.propTypes = {

    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired
}
import React from 'react';
import {Header} from '../Header/Header';
import ChatList from '../ChatList/ChatList';
import MessageField from '../MessageField/MessageField';
import PropTypes from 'prop-types';
import './Layout.css';

export const Layout = ({chatId, messages, sendMessage}) => (
    <>
        <Header chatId={chatId}/>

        <div className="react-messenger__wrapper">
            <ChatList/>

            <div className="react-messenger__message-field">
                <MessageField
                            chatId={chatId}
                            messages={messages}
                            sendMessage={sendMessage}
                />
            </div>
        </div>
    </>
);

Layout.propTypes = {
    chatId: PropTypes.number.isRequired,
    messages: PropTypes.object.isRequired,
};

Layout.defaultProps = {
    chatId: 1,
};
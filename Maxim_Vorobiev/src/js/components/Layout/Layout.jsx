import React from 'react';
import {Header} from '../Header/Header';
import {ChatList} from '../ChatList/ChatList';
import {MessageField} from '../MessageField/MessageField';
import {ChatForm} from '../ChatForm/ChatForm';
import PropTypes from 'prop-types';
import './Layout.css';

export const Layout = ({chats,
    chatId,
    messages,
    input,
    handleButton,
    handleKeyUp,
    handleChange,
    inputChat,
    handleAddChat,
    handleChatKeyUp}) => (
    <>
        <Header chatId={chatId}/>

        <div className="react-messenger__wrapper">
            <ChatList chats={chats}
                      inputChat={inputChat}
                      handleAddChat={handleAddChat}
                      handleChange={handleChange}
                      handleChatKeyUp={handleChatKeyUp}
            />

            <div className="react-messenger__message-field">
                <MessageField chats={chats}
                              chatId={chatId}
                              messages={messages}
                />

                <ChatForm input={input}
                          handleButton={handleButton}
                          handleKeyUp={handleKeyUp}
                          handleChange={handleChange}
                />
            </div>
        </div>
    </>
);

Layout.propTypes = {
    chats: PropTypes.object.isRequired,
    chatId: PropTypes.number.isRequired,
    messages: PropTypes.object.isRequired,
    input: PropTypes.string.isRequired,
    handleButton: PropTypes.func.isRequired,
    handleKeyUp: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    inputChat: PropTypes.string.isRequired,
    handleAddChat: PropTypes.func.isRequired,
    handleChatKeyUp: PropTypes.func.isRequired,
};

Layout.defaultProps = {
    chatId: 1,
};
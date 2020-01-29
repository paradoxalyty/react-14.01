import React from 'react';
import {Header} from '../Header/Header';
import {ChatList} from '../ChatList/ChatList';
import {MessageField} from '../MessageField/MessageField';
import {ChatForm} from '../ChatForm/ChatForm';
import PropTypes from 'prop-types';
import './Layout.css';

export const Layout = ({messages, handleKeyUp, handleChange, handleButton, input}) => (
    <>
        <Header/>

        <div className="react-messenger__wrapper">
            <ChatList/>

            <div className="react-messenger__message-field">
                <MessageField messages={messages}/>

                <ChatForm handleKeyUp={handleKeyUp}
                          handleChange={handleChange}
                          handleButton={handleButton}
                          input={input}
                />
            </div>
        </div>
    </>
);

Layout.propTypes = {
    handleKeyUp: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleButton: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired,
};
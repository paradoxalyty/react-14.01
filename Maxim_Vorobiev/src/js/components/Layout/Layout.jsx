import React from 'react';
import {Header} from '../Header/Header';
import {ChatList} from '../ChatList/ChatList';
import {MessageField} from '../MessageField/MessageField';
import {ChatForm} from '../ChatForm/ChatForm';

export const Layout = ({messages, handleKeyUp, handleChange, handleButton, input}) => (
    <>
        <Header/>

        <div className="react-messenger__wrapper">
            <ChatList/>

            <div className="react-messenger__message-field">
                <div className="react-messenger__messages">
                    <MessageField messages={messages}/>
                </div>

                <ChatForm handleKeyUp={handleKeyUp}
                          handleChange={handleChange}
                          handleButton={handleButton}
                          input={input}
                />
            </div>
        </div>
    </>
);
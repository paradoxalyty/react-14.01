import React from 'react';
import {Header} from '../Header/Header';
import {ChatList} from '../ChatList/ChatList';
import {MessageField} from '../MessageField/MessageField';

export const Layout = () => (
    <>
        <Header/>

        <div className="react-messenger__wrapper">
            <ChatList/>
            <MessageField/>
        </div>
    </>
);
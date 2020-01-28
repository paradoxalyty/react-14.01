import React from 'react';
import {Header} from '../Header/Header';
import {ChatList} from '../ChatList/ChatList';
import {ChatForm} from '../ChatForm/ChatForm';

export const Layout = () => (
    <>
        <Header/>

        <div className="react-messenger__wrapper">
            <ChatList/>
            <ChatForm/>
        </div>
    </>
);
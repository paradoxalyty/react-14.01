import React from 'react';
import ChatListContainer from '../../containers/ChatListContainer'
import './Header.css';
import ProfileContainer from '../../containers/ProfileContainer';

export const Header = () => (
    <header>
        <ProfileContainer />
        <div><a href="/">Root</a>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/profile">Profile</a>
        </div>
        <ChatListContainer />

    </header>
)
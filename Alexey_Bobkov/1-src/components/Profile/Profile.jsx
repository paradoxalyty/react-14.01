import React from 'react';
import './Profile.sass';
import { ChatList } from '../ChatList/ChatList';


export const Profile = ({ profile, chats }) => {

    return (

        (<div className='Profile'>
            <div className='Profile-header'>
                <h1>{profile.name}</h1>
            </div>
            <ChatList chats={chats} />
            <div className='Profile-description'>
                <h2>Профиль</h2>

                <ul>
                    <li>Имя: {profile.name}</li>
                    <li>Описание: {profile.Description}</li>
                </ul>

            </div>
        </div>)
    );
}
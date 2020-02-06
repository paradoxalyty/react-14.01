import React from 'react';
import './Profile.sass';
import { ChatList } from '../ChatList/ChatList';

const name = "123";

export const Profile = ({}) =>
 
(
<div className='Profile'>
    <div className='Profile-header'>
        <h1>Profile: {name}</h1>
    </div>
    <ChatList/>
    <div className='Profile-description'>Описание, Инфа</div>
</div>

);
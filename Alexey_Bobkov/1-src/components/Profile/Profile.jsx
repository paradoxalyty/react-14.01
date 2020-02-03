import React from 'react';
import './Profile.sass';
import { ChatList } from '../ChatList/ChatList';



export const Profile = ({}) =>
(<div className='Profile'><div className='Profile-header'><h1>Profile</h1></div>
<ChatList></ChatList>
<div className='Profile-description'>Описание, Инфа</div></div>
);
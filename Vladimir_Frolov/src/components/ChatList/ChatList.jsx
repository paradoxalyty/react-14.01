import React from 'react';

export const ChatList = ({chats}) =>
    (<div className='ChatList'>
        <ul>{Object.keys(chats).map((chatId) => (
            <li key={chatId}><a href={"/chats/"+chatId}>{chats[chatId].name}</a></li>))}
        </ul>
    </div>);
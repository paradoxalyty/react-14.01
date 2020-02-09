import React from 'react';

export const ChatList = ({chats}) =>
    (<div className='ChatList'>
        <ul>{chats.map(({id, name}) => (
            <li key={id}><a href={"/chats/"+id}>{name}</a></li>))}
        </ul>
    </div>);
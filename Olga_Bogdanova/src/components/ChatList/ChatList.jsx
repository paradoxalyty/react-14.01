import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Message } from '../Message/Message';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Link } from 'react-router-dom';
import './ChatList.scss';
import { addChat } from '../../store/chatAction';

export const ChatList = ({ chats, addChat }) => {
    const [chatName, setChatName] = useState('');
    return (<div className='ChatList'>
        <ul>
            {chats.map(({ id, name, unread }) => <li key={id}><Link to={'/chats/' + id}>{name}</Link>{unread && 'Новое сообще'}</li>)}
            <li>
                <input
                    type="text"
                    value={chatName}
                    onChange={({ currentTarget: { value } }) => setChatName(value)} />
                <button
                    onClick={() => addChat(chatName)}>
          Добавить чат</button></li>

        </ul>
    </div>);
};


//рабить на комеоненты 
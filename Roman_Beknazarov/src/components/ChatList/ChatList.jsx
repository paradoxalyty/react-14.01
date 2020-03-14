import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ChatListElement} from '../ChatListElement/ChatListElement';
import {List, TextField} from '@material-ui/core';
import {ListItem} from '@material-ui/core';
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import './ChatList.css';

export const ChatList = ({chats, addChat}) => {
    const [chatName, setChatName] = useState('');

    const chatsKeysArr = Object.keys(chats); //Определяю количество чатов
    let id = chatsKeysArr.length + 1;  //В зависимости от количества чатов присваиваю очередной порядковый номер создаваемому чату.

    return (
        <List className="ChatList">
            <ListItem>
                <AccountCircleIcon className="avatar"/>
                <Link to="/profile">My Profile</Link>
            </ListItem>
            {chats.map(({id, name, chatNumber, unread}) =>
                <ChatListElement name={name} number={chatNumber} unread={unread} key={id}
                />)}
            <ListItem>
                <TextField
                    type="text"
                    value={chatName}
                    onChange={({currentTarget: {value}}) => setChatName(value)}
                />
                <Fab onClick={() => addChat(chatName, id)}>
                    <AddIcon/>
                </Fab>
            </ListItem>
        </List>
    );
};

ChatList.propTypes = {
    chats: PropTypes.array.isRequired,
    addChat: PropTypes.func.isRequired,
};
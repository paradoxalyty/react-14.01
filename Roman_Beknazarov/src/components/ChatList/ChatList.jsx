import React, {useState} from 'react';
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

    return (
        <List className="ChatList">
            <ListItem>
                <AccountCircleIcon className="avatar"/>
                <Link to="/profile">My Profile</Link>
            </ListItem>
            {Object.values(chats).map((chat, index) =>
                <ChatListElement name={chat.name} number={chat.chatNumber} key={index}
                />)}
            <ListItem>
                <TextField
                    type="text"
                    value={chatName}
                    onChange={({currentTarget: {value}}) => setChatName(value)}
                />
                <Fab
                    onClick={() => addChat(chatName)}
                ><AddIcon/></Fab>
            </ListItem>
        </List>
    );
};
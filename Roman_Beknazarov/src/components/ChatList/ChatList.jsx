import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './ChatList.css';

export const ChatList = () => {
    return (
        <List className="ChatList">
            <ListItem>
                <AccountCircleIcon className="avatar"/>
                <Link to="/profile">My Profile</Link>
            </ListItem>
            <ListItem>
                <AccountCircleIcon className="avatar"/>
                <Link to="/chats/1">Chat 1</Link>
            </ListItem>
            <ListItem>
                <AccountCircleIcon className="avatar"/>
                <Link to="/chats/2">Chat 2</Link>
            </ListItem>
            <ListItem>
                <AccountCircleIcon className="avatar"/>
                <Link to="/chats/3">Chat 3</Link>
            </ListItem>
        </List>
    );
};
import React from 'react';
import './ChatList.sass';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { Link } from 'react-router-dom';




export const ChatList = () =>

    (<div className='ChatList'>

        <List>
            <Link to='/chats/1'>
                <ListItem>
                    <ListItemIcon>
                        <ChatBubbleOutlineOutlinedIcon />
                    </ListItemIcon>
                    Чат 1
        </ListItem>
            </Link>
            <Divider />
            <Link to='/chats/2'>
                <ListItem>
                    <ListItemIcon>
                        <ChatBubbleOutlineOutlinedIcon />
                    </ListItemIcon>
                    Чат 2
        </ListItem>
            </Link>
            <Divider />
            <Link to='/chats/3'>
                <ListItem>
                    <ListItemIcon>
                        <ChatBubbleOutlineOutlinedIcon />
                    </ListItemIcon>
                    Чат 3
        </ListItem>
            </Link>
            <Divider />
            <Link to='/chats/4'>
                <ListItem>
                    <ListItemIcon>
                        <ChatBubbleOutlineOutlinedIcon />
                    </ListItemIcon>
                    Чат 4
        </ListItem>
            </Link>
            <Divider />
            <Link to='/chats/5'>
                <ListItem>
                    <ListItemIcon>
                        <ChatBubbleOutlineOutlinedIcon />
                    </ListItemIcon>
                    Чат 5
        </ListItem>
            </Link>
            <Divider />
        </List>
    </div>);
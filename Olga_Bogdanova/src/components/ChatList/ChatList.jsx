import React from "react";
import PropTypes from 'prop-types';
import { Message } from '../Message/Message';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {Link} from 'react-router-dom';
import './ChatList.scss';

export const ChatList = ({ chats }) =>
  (<div className='ChatList'>
    <ListItemAvatar className='ListItem'><Link to="/chats/1">Chat 1</Link></ListItemAvatar>
    <ListItemAvatar className='ListItem'><Link to="/chats/2">Chat 2</Link></ListItemAvatar>
    <ListItemAvatar className='ListItem'><Link to="/chats/3">Chat 3</Link></ListItemAvatar>
  </div>);



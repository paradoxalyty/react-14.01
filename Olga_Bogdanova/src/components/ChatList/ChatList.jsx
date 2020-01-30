import React from "react";
import PropTypes from 'prop-types';
import { Message } from '../Message/Message';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import './ChatList.scss';

export const ChatList = ({ chats }) =>
  (<div className='ChatList'>
    <ListItemAvatar className='ListItemAvatar'>Chat 1</ListItemAvatar>
    <ListItemAvatar className='ListItemAvatar'>Chat 2</ListItemAvatar>
    <ListItemAvatar className='ListItemAvatar'>Chat 3</ListItemAvatar>
  </div>);



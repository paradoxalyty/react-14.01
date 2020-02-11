import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './ChatList.css';

export const ChatList = ({chats}) => (
  <div className='ChatList'>
    <List>
      {Object.keys(chats).map((id) => <ListItem key={id}> {chats[id].title} </ListItem >)}
    </List>
  </div>
);

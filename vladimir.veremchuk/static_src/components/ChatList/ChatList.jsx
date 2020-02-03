import React from "react";
import {List, ListItem} from 'material-ui/List';
import {Link} from 'react-router-dom';

export const ChatList = ({chats}) => {
        return <div className='chatList'>
        <List>
          <ListItem>
          <Link to ="/chats/1">Чат 1</Link>
          </ListItem>
          <ListItem>
          <Link to ="/chats/2">Чат 2</Link>
          </ListItem>
          <ListItem>
          <Link to ="/chats/3">Чат 3</Link>
          </ListItem>
        </List>   
        <ListItem>
          <Link to ="/chats/1">+</Link>
          </ListItem>
</div>
    }
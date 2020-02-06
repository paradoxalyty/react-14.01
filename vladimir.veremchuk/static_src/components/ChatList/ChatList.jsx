import React, {useState} from "react";
import {List, ListItem} from 'material-ui/List';
import {Link} from 'react-router-dom';

export const ChatList = ({chats, addChat}) => {
        const [chatName, setChatName] = useState('');

        return <div className='chatList'>
        <List>
          {chats.map(({id, name}) => <ListItem key={id}><Link to={'/chats/'+id}>{name}</Link></ListItem>)}
          <ListItem>
          <input type="text" value={chatName} onChange={({ currentTarget: { value } }) => setChatName(value)}/>
          <button onClick={() => addChat(chatName)}>Добавить чат</button>
          </ListItem>
          </List>
          </div>
    }
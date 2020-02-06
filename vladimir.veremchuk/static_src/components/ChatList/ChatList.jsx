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
          {/* <ListItem>
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
          </ListItem> */}

    }
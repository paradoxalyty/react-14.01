import React from "react";
import {List, ListItem} from 'material-ui/List';

export const ChatList = () => {

        return <div className='chatList'>
        <List>
          <ListItem
            primaryText="Чат1"
          />
          <ListItem
            primaryText="Чат2"
          />
          <ListItem
            primaryText="Чат3"
          />
        </List>
</div>
    }
import React, { Component } from "react";
import '../styles/styles.css';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

export default class ChatList extends Component {

    render () {
        return <div className='chatList'>
        <List>
          <ListItem
            primaryText="First chat"
            leftIcon={<CommunicationChatBubble />}
          />
          <Divider />
          <ListItem
            primaryText="Second chat"
            leftIcon={<CommunicationChatBubble />}
          />
          <Divider />
          <ListItem
            primaryText="Third chat"
            leftIcon={<CommunicationChatBubble />}
          />
          <Divider />
          <ListItem
            primaryText="Forth chat"
            leftIcon={<CommunicationChatBubble />}
          />
          <Divider />
        </List>
</div>
    }
}
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

export default class ChatList extends Component {

    render () {
        return <List>
            <Divider />
            <Link to="/chat/1/" className='listLink'>
                <ListItem primaryText="First chat" leftIcon={<CommunicationChatBubble />} 
                />
            </Link>
            <Divider />
            <Link to="/chat/2/" className='listLink'>
              <ListItem primaryText="Second chat" leftIcon={<CommunicationChatBubble />}
              />
            </Link>
            <Divider />
            <Link to="/chat/3/" className='listLink'>
              <ListItem primaryText="Third chat" leftIcon={<CommunicationChatBubble />}
              />
            </Link>
            <Divider />
          </List>

    }
}
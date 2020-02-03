import React from 'react';
import PropTypes from 'prop-types';
import { Message } from '../Message/Message';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from "@material-ui/core/Divider";
import "./ChatList.css";

export const ChatList = ({ chats }) => (
         <List className="chat-list">
           <Link to="/chats/1">
             <ListItem>
               <ListItemAvatar>
                 <Avatar>
                   <ImageIcon />
                 </Avatar>
               </ListItemAvatar>
               <ListItemText primary="Chat 1" secondary="Jan 19, 2020" />
             </ListItem>
           </Link>
           <Divider />
           <Link to="/chats/2">
             <ListItem>
               <ListItemAvatar>
                 <Avatar>
                   <ImageIcon />
                 </Avatar>
               </ListItemAvatar>
               <ListItemText primary="Chat 2" secondary="Jan 17, 2020" />
             </ListItem>
           </Link>
           <Divider />
           <Link to="/chats/3">
             <ListItem>
               <ListItemAvatar>
                 <Avatar>
                   <ImageIcon />
                 </Avatar>
               </ListItemAvatar>
               <ListItemText primary="Chat 3" secondary="Jan 10, 2020" />
             </ListItem>
           </Link>
         </List>
       );

// ChatList.propTypes = {
//   chats: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
// }
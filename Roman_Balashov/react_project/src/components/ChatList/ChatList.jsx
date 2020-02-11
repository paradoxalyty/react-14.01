import React from 'react';
import ListItem from '@material-ui/core/List';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from "react-router-dom";
import './ChatList.css'

export class ChatList extends React.Component {
    render() {
        return (
            <div className="chatlist-wrap">
                <List>
                    <Link to="/chats/1">
                        <ListItem classes={{ root: "chatlist__item" }}>
                            <ListItemIcon classes={{ root: "chatlist__item_icon" }}>
                                <PersonIcon fontSize="large" />
                            </ListItemIcon>
                            <ListItemText primary={'First chat'} />
                        </ListItem>
                    </Link>
                    <Link to="/chats/2">
                        <ListItem classes={{ root: "chatlist__item" }}>
                            <ListItemIcon classes={{ root: "chatlist__item_icon" }}>
                                <PersonIcon fontSize="large" />
                            </ListItemIcon>
                            <ListItemText primary={'Second chat'} />
                        </ListItem>
                    </Link>
                    <Link to="/chats/3">
                        <ListItem classes={{ root: "chatlist__item" }}>
                            <ListItemIcon classes={{ root: "chatlist__item_icon" }}>
                                <PersonIcon fontSize="large" />
                            </ListItemIcon>
                            <ListItemText primary={'Third chat'} />
                        </ListItem>
                    </Link>
                </List>
            </div>
        )
    }
}

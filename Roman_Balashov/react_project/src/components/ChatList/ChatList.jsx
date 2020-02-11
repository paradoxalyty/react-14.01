import React from 'react';
import ListItem from '@material-ui/core/List';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from "react-router-dom";
import './ChatList.css'
import { Button, Input } from '@material-ui/core';

export class ChatList extends React.Component {
    render() {
        const { chats, addChat } = this.props;
        return (
            <div className="chatlist-wrap">
                <List>
                    {chats.map(({ id, name }) => <Link key={id} to={"/chats/" + id}>                <ListItem classes={{ root: "chatlist__item" }}>
                        <ListItemIcon classes={{ root: "chatlist__item_icon" }}>
                            <PersonIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primary={name} />
                    </ListItem></Link>)}
                </List>
                {/* <Input type="text" value={chatName}></Input>
                <Button onClick={() => addChat(chatName)}>+</Button> */}
            </div>
        )
    }
}


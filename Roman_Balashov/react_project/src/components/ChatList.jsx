import React from 'react';
import ListItem from '@material-ui/core/List';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonIcon from '@material-ui/icons/Person';
import '../style'

export class ChatList extends React.Component {
    render () {
        return (
            <div className="chatlist-wrap">
                <List>
                    <ListItem classes={{ root: "chatlist__item" }}>
                        <ListItemIcon classes={{ root: "chatlist__item_icon" }}>
                            <PersonIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primary={'First chat'} />
                    </ListItem>
                    <ListItem classes={{ root: "chatlist__item" }}>
                        <ListItemIcon classes={{ root: "chatlist__item_icon" }}>
                            <PersonIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primary={'Second chat'} />
                    </ListItem>
                    <ListItem classes={{ root: "chatlist__item" }}>
                        <ListItemIcon classes={{ root: "chatlist__item_icon" }}>
                            <PersonIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primary={'Third chat'} />
                    </ListItem>
                </List>
            </div>
        )
    }
}

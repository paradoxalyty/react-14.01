import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Avatar1 from '../../../img/avatars/1.png';
// TODO
import Avatar2 from '../../../img/avatars/2.png';
import Avatar3 from '../../../img/avatars/3.png';
import PropTypes from 'prop-types';
import './ChatList.css';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export const ChatList = ({chats}) => {
    const classes = useStyles();

    return (
        <div className="react-messenger__chatlist">
            <List dense className={classes.root}>
                {Object.keys(chats).map(chatId => {
                    const labelId = `checkbox-list-secondary-label-${chatId}`;

                    return (
                        <Link className="react-messenger__chatlist-link" key={chatId} to={`/chat/${chatId}/`}>
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar
                                        alt={`Avatar ${chatId + 1}`}
                                        // src={`/dist/img/avatars/${chatId}.png`}
                                        src={Avatar1}
                                    />
                                </ListItemAvatar>

                                <ListItemText id={labelId} primary={`User ${chatId}`}/>
                            </ListItem>
                        </Link>
                    );
                })}
            </List>
        </div>
    );
};

ChatList.propTypes = {
    chats: PropTypes.object.isRequired,
};

import React from 'react';
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
import Avatar4 from '../../../img/avatars/4.png';
import './ChatList.css';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export const ChatList = () => {
    const classes = useStyles();

    return (
        <div className="react-messenger__chatlist">
            <List dense className={classes.root}>
                {[0, 1, 2, 3].map(value => {

                    const labelId = `checkbox-list-secondary-label-${value}`;

                    // TODO
                    // const avatarSrc = 'Avatar' + (value + 1);
                    // console.log({avatarSrc});

                    return (
                        <ListItem key={value} button>
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar ${value + 1}`}
                                    // src={`/dist/img/avatars/${value + 1}.png`}
                                    src={Avatar1}
                                />
                            </ListItemAvatar>

                            <ListItemText id={labelId} primary={`User ${value + 1}`}/>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
};
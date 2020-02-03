import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

const avatarSrc = "./img/chatList_icon1.png";

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));

export const ChatListItem =({user}) => {
    const classes = useStyles();
   
    return (
        <div>
          <ListItem name={user.userName} alignItems="flex-start" >
            <ListItemAvatar>
              <Avatar alt={user.userName} src={user.userAvatar} />
            </ListItemAvatar>
            <ListItemText
              primary={user.userName}
              />
          </ListItem>
          <Divider variant="inset" component="li" />
          </div>
      );
};

ChatListItem.propTypes={
    //user: PropTypes.shape.isRequired,
}
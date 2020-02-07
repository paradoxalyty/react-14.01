import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
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

export const ChatListItem =({chat}) => {
    const classes = useStyles();
    const linkPath = "/chats/"+chat.name;
    return (
        <>
        <Link to={linkPath}>
          <ListItem name={chat.name} alignItems="flex-start" >
            <ListItemAvatar>
              <Avatar alt={chat.name} src={chat.userAvatar} />
            </ListItemAvatar>
            <ListItemText
              primary={chat.name}
              />
          </ListItem>
          </Link>
          <Divider variant="inset" component="li" />
          </>
      );
};

ChatListItem.propTypes={
    //user: PropTypes.shape.isRequired,
}
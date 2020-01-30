import React, {useState} from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {ChatListItems} from "../ChatListItems/ChatListItems";
import "./ChatList.css";

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

export const ChatList =({users}) => {
    const classes = useStyles();
    return (
        <div className="ChatList">
        <List className={classes.root}>
          <ChatListItems users={users} />
        </List>
        </div>
      );
};

// ChatList.propTypes={
//     userName: PropTypes.string.isRequired,
// }
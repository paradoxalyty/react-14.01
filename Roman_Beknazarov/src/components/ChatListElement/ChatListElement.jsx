import React from "react";
import {Link} from "react-router-dom";
import {ListItem} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const ChatListElement = ({name, number}) => {
    return (<ListItem>
        <AccountCircleIcon className="avatar"/>
        <Link to={`/chats/${number}`}>{name}</Link>
    </ListItem>);
};

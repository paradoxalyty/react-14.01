import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {ListItem} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const ChatListElement = ({name, number, unread}) => {
    return (<ListItem>
        <AccountCircleIcon className="avatar"/>
        <Link to={`/chats/${number}`}>{name}</Link>
        <span className="unread">{unread && "Unread Message"}</span>
    </ListItem>);
};

ChatListElement.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
};
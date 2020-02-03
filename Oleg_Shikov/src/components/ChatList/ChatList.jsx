import React from 'react';
import PropTypes from 'prop-types';
import {Message} from '../Message/Message';
import {Link} from 'react-router-dom';
// import './MessageField.css';

export const ChatList = ({ chats }) =>
    (<div className='ChatList'>
        <ul>
            <li><Link to="/chats/1">Chat 1</Link></li>
            <li><Link to="/chats/2">Chat 2</Link></li>
            <li><Link to="/chats/3">Chat 3</Link></li>
        </ul>
    </div>);

// ChatList.propTypes = {
//     chats: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
// }

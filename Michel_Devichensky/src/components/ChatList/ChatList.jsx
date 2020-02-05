import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ChatList.css'

import { CreateChat } from '../CreateChat/CreateChat';
/**
 * 
 * @param {*} param0 
 */
export const ChatList = ({ chats }) => 
              
(<div className="ChatList">
    <ul>
       {Object.values(chats).map((chat, index) => <CreateChat {...chat} key={index}/>)} 
    </ul> 
</div>);
                                 
// ChatList.PropTypes = {

// }                          
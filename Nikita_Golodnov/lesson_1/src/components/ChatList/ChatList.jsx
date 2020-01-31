import React from "react"
import {Message} from '../Message/Message'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


export const ChatList = ({ chats }) =>
    (<div className='ChatList'>
        <ul>
            <li><Link to="/chats/1">Чатик 1</Link></li>
            <li><Link to="/chats/2">Чатик 2</Link></li>
            <li><Link to="/chats/3">Чатик 3</Link></li>
        </ul>
    </div>)

// ChatList.propTypes = {
//     messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
// }
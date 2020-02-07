import React from "react";
import {Link} from 'react-router-dom';
import './ChatList.css'

export const ChatList = (props) => {
    const {chatList, pathId} = props;

    return (<div className="chatList">
            <ul>
                {Object.keys (chatList).map (id => 
                <li key={id}><Link to={"/chats/" + id}>
                    {chatList[id].name}
                </Link></li>
                )}
            </ul>
        </div>);
}
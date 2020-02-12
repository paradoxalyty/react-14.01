import React from "react";
import {Link} from 'react-router-dom';

export const Profile = (props) => {
    // console.log (props);
    return (
        <div>
            <p>Страница профиля</p>
            <Link to="/chats">К выбору чата</Link>
        </div>);
}
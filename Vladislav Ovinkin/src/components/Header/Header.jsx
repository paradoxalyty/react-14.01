import React from "react";
import './Header.css';
import {Link} from 'react-router-dom';

export const Header = ({text}) => {
    return (
        <div className="header">
            <h1 className="header-text">
                React Chat project. {text.length == 0 ? "Выберите чат." : "Чат с пользователем " + text + "."}
            </h1>
            <Link className="header-link" to="/profile">Profile page</Link>
        </div>);

}
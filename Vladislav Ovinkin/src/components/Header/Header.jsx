import React from "react";
import './Header.css';
import {Link} from 'react-router-dom';

export const Header = ({text}) => {
    return (
        <div className="header">
            <h1 className="header-text">
                React Chat project. User: {text}.
            </h1>
            <Link to="/profile">Profile page link</Link>
        </div>);

}
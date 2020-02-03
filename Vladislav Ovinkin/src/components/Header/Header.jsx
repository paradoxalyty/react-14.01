import React from "react";
import './Header.css';

export const Header = ({text}) => {
    return (
        <div className="header">
            <h1 className="header-text">
                React Chat project. User: {text}.
            </h1>
            <a className="header-link" href="/profile">Profile page</a>
        </div>);
}
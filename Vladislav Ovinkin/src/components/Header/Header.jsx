import React from "react";
import './Header.css';

export const Header = ({text}) => {
    return (
        <h1 className="header">
            React Chat project. User: {text}
        </h1>);
}
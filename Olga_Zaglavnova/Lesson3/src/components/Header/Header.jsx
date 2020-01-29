import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

export const Header =({userName}) => {
    return (<div className="Header">{userName}</div>);
};

Header.propTypes={
    userName: PropTypes.string.isRequired,
}
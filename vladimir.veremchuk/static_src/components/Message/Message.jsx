import React from "react";
import classnames from "classnames";
import './Message.css';

export const Message = ({ name, content }) => {
    const classNames = classnames('Message', { 'Message--robot': name === 'ChatBot' });
    return (<div className={classNames}><strong>{name}:</strong> {content}</div>);
}
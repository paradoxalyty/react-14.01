import React from "react";
import './Message.css';
import {ROBOT_NAME} from "../../containers/App";

export const Message = ({name, content}) => {
    let className = 'Message ' + (name === ROBOT_NAME ? ' isRobot' : '');
    return <div className={className}><strong>{name}:</strong> {content}</div>;
};
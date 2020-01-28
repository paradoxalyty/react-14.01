import React from "react";
import './Message.css';

export const Message = ({name, content}) => {
    let className = 'Message '+(name==='ROBOT'?' isRobot':'');
    return <div className={className}><strong>{name}:</strong> {content}</div>;
};
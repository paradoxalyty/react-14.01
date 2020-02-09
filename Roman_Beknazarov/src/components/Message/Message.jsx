import React from 'react';
import './Message.css';
import classnames from "classnames";

export const Message = ({name, content}) => {
    const classNames = classnames('Message', {'Message--robot': name === 'Robot'});

    return (
        <div className={classNames}>
            <div>{content}</div>
            <div className="Message-sender">{name}</div>
        </div>
    )
};
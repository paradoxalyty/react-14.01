import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';
import classnames from 'classnames';

export const Message = ({sender, text}) => {

    const classNames = classnames('Message', {'Message--robot': sender === 'bot'});

    return (
        <div className={classNames}>
            <div>{text}</div>
            <div className="Message-sender">{sender}</div>
        </div>
    );
};

Message.propTypes = {
    text: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
};
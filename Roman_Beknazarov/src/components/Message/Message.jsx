import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';
import classnames from 'classnames';

export const Message = ({author, content}) => {
    const classNames = classnames('Message', {'Message--robot': author === 'Robot'});
    return (
        <div className={classNames}>
            <div>{content}</div>
            <div className="Message-sender">{author}</div>
        </div>
    );
};

Message.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};
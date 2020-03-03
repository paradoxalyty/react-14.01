import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';
import classnames from 'classnames';

export const Message = ({name, content}) => {
    const classNames = classnames('Message', {'Message--robot': name === 'Robot'}, {'Message--user': name !== 'Robot'});

    return (
        <div className={classNames}>
            <div>{content}</div>
            <div className="Message-sender">{name}</div>
        </div>
    );
};

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};
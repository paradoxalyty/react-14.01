import React from "react";
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Message.scss';

export const Message = ({ name, content }) => {
    const classNames = classnames('message', {'message--robot': name === 'Robot'});
    return (<div className={classNames}>
            <b>{name}:</b> {content}
        </div>)
};

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

/**
 * Component for drawing message
 * @param {String} name Message text
 * @param {String} content Entered message
 */

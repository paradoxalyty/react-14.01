import './Message.css';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
/**
 * 
 * @param {*} param0 
 */
export const Message = ({ name, content }) => {
    const className = classnames('Message', { 'Message--robo': name === 'Robot' });
    return (<div className={className}><strong>{name}:</strong> {content}</div>)     
}


Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}
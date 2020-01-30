import React from 'react';
import PropTypes from 'prop-types';

export const Message = ({name, content}) => 
    <div><strong>{name}:</strong> {content}</div>;

Message.PropTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}
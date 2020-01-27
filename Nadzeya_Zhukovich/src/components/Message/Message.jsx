import React from "react";
import PropTypes from 'prop-types';

/**
 * Component for drawing message
 * @param {String} name Message text
 * @param {String} content Entered message
 */

export const Message = ({ name, content }) =>
    <div><b>{name}:</b> {content}</div>;

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import './Message.sass';
export const Message = ({ name, content }) =>
    (<div className='Message'>

        <strong>{name}: </strong>{content}
        </div>);


Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,

};
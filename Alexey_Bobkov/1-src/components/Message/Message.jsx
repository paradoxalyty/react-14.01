import React from 'react';
import PropTypes from 'prop-types';

export const Message = ({name, content}) =>
(<div><strong>{name}: </strong>{content}</div>); 
     
       
Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,

};
import React from 'react';
import PropTypes from 'prop-types';

export const Message = ({name, content}) => (
    <div className="react-messenger__message"
         style={{
             alignSelf: name === 'bot' ?
                 'flex-end' : 'flex-start'
         }}
    >

        <div>{content}</div>

        <div className="react-messenger__message-name">
            {name}
        </div>
    </div>
);

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

Message.defaultProps = {
    name: 'Name',
    content: "Message",
};
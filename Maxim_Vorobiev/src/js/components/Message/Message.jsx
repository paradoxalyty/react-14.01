import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './Message.css';

const BOT_NAME = 'Bot';

export const Message = ({name, content}) => {
    const classNames = classnames('react-messenger__message', {'react-messenger__message-bot': name === BOT_NAME});

    return (
        <div className={classNames}
             // style={{
             //     alignSelf: name === 'bot' ?
             //         'flex-end' : 'flex-start'
             // }}
        >

            <div>{content}</div>

            <div className="react-messenger__message-name">
                {name}
            </div>
        </div>
    )
};

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

Message.defaultProps = {
    name: 'Name',
    content: "Message",
};
import React from "react";
import PropTypes from 'prop-types';

/**
 *  @param {string} message - message text
 *  @param {string} name - sender name
 *  @param {string} time - sending message time
 *  @param {string} onSendMessage - sending new message handler
 */
export const ChatForm = ({message, name, time, onSendMessage}) =>
    (<div>
        <input value={name} type="text" />
        <textarea value={message} />
        <button>Отправить</button>
    </div>);

ChatForm.propTypes = {
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    onSendMessage: PropTypes.func.isRequired,
}
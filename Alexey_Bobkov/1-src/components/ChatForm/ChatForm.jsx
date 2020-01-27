import React from 'react';
import PropTypes from 'prop-types';

export const ChatForm = ({message, name, onSendMessage}) =>
(<div>
    <input value={name} type='Your Name' />
    <textarea value={message} />
    <button>Отправить</button>
</div>);

ChatForm.propTypes ={
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onSendMessage: PropTypes.func.isRequired
}
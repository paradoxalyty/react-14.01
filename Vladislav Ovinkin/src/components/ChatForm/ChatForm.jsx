import React from "react";
import PropTypes from 'prop-types';

/**
 *  Компонент с формой отправки нового сообщения
 *  @param {string} message - message text
 *  @param {string} name - sender name
 *  @param {string} time - sending message time
 *  @param {Function} onSendMessage - sending new message handler
 */
export class ChatForm extends React.Component {
    state = {
        name: 'User',
        message: 'My message',
    }
    textarea = React.createRef ();
    componentDidMount () {
        this.textarea.current.focus ();
    }
    handleInput = ({currentTarget: {value}}) => {
        console.log (value);
    }
    render () {
        return (<div>
            <input value={ this.state.name } onChange={this.handleInput} type="text" />
            <textarea value={ this.state.message} ref={this.textarea}/>
            <button>Отправить</button>
        </div>);
    }
}

// export const ChatForm = ({onSendMessage}) => {
//     return (<div>
//         <input value={name} type="text" />
//         <textarea value={ message} />
//         <button>Отправить</button>
//     </div>)
// };

ChatForm.propTypes = {
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    onSendMessage: PropTypes.func.isRequired,
}
import React from "react";
import PropTypes from 'prop-types';

/**
 *  Компонент с формой отправки нового сообщения
 *  @param {string} content - message text
 *  @param {string} name - sender name
 *  @param {string} time - sending message time
 *  @param {Function} onSendMessage - sending new message handler
 */
export class ChatForm extends React.Component {
    state = {
        name: 'User',
        content: 'My message',
    }
    textarea = React.createRef ();
    componentDidMount () {
        this.textarea.current.focus ();
    }
    handleInput = ({currentTarget: {value, name}}) => {
        // event.currentTarget.value
        this.setState(() => ({[name]: value}));
    }
    handleClick = () => {
        const {name, content} = this.state;
        const date = new Date ();
        const time = date.toLocaleDateString() + " " + date.toLocaleTimeString();
        this.props.onSendMessage ({name, content, time});
    }
    render () {
        return (<div>
            <input name="name" value={ this.state.name } onChange={this.handleInput} type="text" />
            <textarea name="content" value={ this.state.content} onChange={this.handleInput} ref={this.textarea}/>
            <button onClick={this.handleClick}>Отправить</button>
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
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    onSendMessage: PropTypes.func.isRequired,
}
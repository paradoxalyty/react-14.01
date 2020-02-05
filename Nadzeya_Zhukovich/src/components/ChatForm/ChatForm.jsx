import React, {useState, useRef, useEffect, Component} from "react";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './ChatForm.scss';

// export class ChatForm extends React.Component {
//     constructor(prop) {
//         super(prop);
//         this.state = {
//             name: 'User',
//             content: 'My message'
//         }
//         this.textarea = React.createRef();
//     }
//
//     componentDidMount() {
//         this.textarea.current.focus();
//     }
//
//     handelInput({currentTarget: {value, name}}){
//         this.setState(() => ({[name]: value}))
//     }
//
//     handleClick() {
//         const {name, content} = this.state;
//         this.props.onSentMessage({name, content});
//     }
//
//     render() {
//         return (<div>
//             <input value={this.state.name}
//                    onChange={this.handelInput.bind(this)}
//                    name='name'
//                    type='text'
//             />
//             <textarea value={this.state.content}
//                       onChange={this.handelInput.bind(this)}
//                       name='content'
//                       ref={this.textarea}
//             />
//             <button onClick={this.handleClick.bind(this)}> Send </button>
//         </div>);
//     }
// }
export const ChatForm = ({ onSentMessage }) => {
    const [name, setName] = useState('Mi');
    const [content, setContent] = useState('');

    const handleKeyUp = (event) => {
        if(event.keyCode === 13) {
            handleSendClick();
        }
    }

    const handleSendClick = () => {
            onSentMessage({name, content});
            setContent('');
    };

    return (<div className={'chatForm'}>
        <TextField value={name}
               type='text'
               onChange={({currentTarget: {value}}) => setName(value)}
               label='Name'
               variant='outlined'
               className={'name-input'}
        />
        <TextField value={content}
                  onChange={({currentTarget: {value}}) => setContent(value)}
                  multipline={'true'}
                  rowsMax={'10'}
                  variant='outlined'
                  className={'textarea'}
                  label='Massage'
                  autoFocus
                  onKeyUp={handleKeyUp}
        />
        <Button onClick={handleSendClick}
                variant='contained'
                color='primary'
                className={'button'}
        > Send </Button>
    </div>);
};

ChatForm.propTypes = {
    onSentMessage: PropTypes.func.isRequired
};

/**
 * Component for drawing a field with
 * a form for sending a new message
 * @param {String} message Message text
 * @param {String} name Sender name
 * @param {Function} onSentMessage Message handler
 */

import React, {useState, useRef, useEffect, Component} from "react";
import PropTypes from 'prop-types';

/**
 * Component for drawing a field with
 * a form for sending a new message
 * @param {String} message Message text
 * @param {String} name Sender name
 * @param {Function} onSentMessage Message handler
 */

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
    const [name, setName] = useState('User');
    const [content, setContent] = useState('My message');
    const textarea = useRef();

    useEffect(() => {
        textarea.current.focus();
    }, []);

    const handleClick = () => {
       onSentMessage({name, content});
    };

    return (<div>
        <input value={name}
               type='text'
               onChange={({currentTarget: {value}}) => setName(value)}
        />
        <textarea value={content}
                  onChange={({currentTarget: {value}}) => setContent(value)}
                  ref={textarea}
        />
        <button onClick={handleClick}> Send </button>
    </div>);
};

ChatForm.propTypes = {
    onSentMessage: PropTypes.func.isRequired
};

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import './Message.css';

export const Message = ({ name, content }) => {
    const classNames = classnames('Message', { 'Message--robot': name === 'ChatBot' });
    return (<div className={classNames}><strong>{name}:</strong> {content}</div>);
}

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

// class Message extends React.Component {
//     state = {
//         name: "",
//         content: ""
//     };

//     render() {
//         return <div><strong>{ this.props.name}</strong>{": "+this.props.content}</div>
//     }
// }

// export default Message;
import React from "react";

class Message extends React.Component {
    state = {
        name: "",
        content: ""
    };

    render() {
        return <div><strong>{ this.props.name}</strong>{": "+this.props.content}</div>
    }
}

export default Message;
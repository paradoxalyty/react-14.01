import React, {Component} from "react";

class Message extends Component {
    render () {
        const {name, content} = this.props;
        return <div><strong>{ name }: </strong>{ content }</div>;
    }
}

export {Message};
import React, {Component} from "react";

class Message extends Component {
    render () {
        const {name, content, time} = this.props;
        let chatTime = "";
        time == undefined ? chatTime = "" : chatTime = " @[" + time + "]"
        return <div><strong>{ name }{ chatTime }:  </strong>{ content }</div>;
    }
}

export {Message};
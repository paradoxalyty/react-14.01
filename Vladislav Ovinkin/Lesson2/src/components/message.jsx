import React, {Component} from "react";

class Message extends Component {
    render () {
        const {name, content, time} = this.props;
        return <div><strong>{ name }{ time == undefined ?  "" : <small> [{time}]</small>}:</strong><br/>&mdash; { content }<hr/></div>;
    }
}

export {Message};
import React from "react";
import ReactDom from "react-dom";

export default class Message extends React.Component {
    render(){
        return <div className="messageRow"><strong>{this.props.name}: </strong>{this.props.content}</div>;
    }
}
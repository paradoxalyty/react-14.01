import React from "react";
import ReactDom from "react-dom";
import css from 'style.css';

export default class Message extends React.Component {
    render(){
        let classStr = "messageRow " + this.props.msgClass;
        return <div className={classStr}><strong>{this.props.name}: </strong>{this.props.content} <span className="messageTime"> {this.props.time}</span></div>;
    }
}
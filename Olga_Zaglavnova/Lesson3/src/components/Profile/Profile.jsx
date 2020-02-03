import React, {Component} from "react";
import Avatar from '@material-ui/core/Avatar';
import {Header} from "../Header/Header";
import "./Profile.css";
import { render } from "react-dom";

export class Profile extends Component{
    render(){
        const chat =this.props.chat;
        return (<>
            <div className="Profile">
                <h3>PROFILE</h3>
                <Avatar alt={chat.name} src={chat.userAvatar} className="Profile__avatar"/>
                <h2>{chat.name}</h2>
                <p>Общее количество сообщений в чате: </p>
                {chat.messages.length}
            </div>
        </>)
    }
}
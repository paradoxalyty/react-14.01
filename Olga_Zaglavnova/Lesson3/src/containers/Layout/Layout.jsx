import React, {Component} from 'react';
import {Header} from "../../components/Header/Header";
import {ChatContainer} from "../ChatContainer";
import {ChatList} from "../../components/ChatList/ChatList";
import "./Layout.css";

//const avatarSrc = "./img/chatList_icon1.png";

export class Layout extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [{userName: "John", userAvatar: ""}, 
                    {userName: "David", userAvatar: ""},
                    {userName: "Cindy", userAvatar: ""},
                    {userName: "Julia", userAvatar: ""},
                    {userName: "Allan", userAvatar: ""}
                    ],
            currentUser:"John"
        };
    };
    
    render(){
        const {users, currentUser} = this.state;
        return (<div className="Layout">
                    <Header userName={currentUser}/>
                    <ChatList {...{users}} />
                    <ChatContainer />
                </div>);
    }
}
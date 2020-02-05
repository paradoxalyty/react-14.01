import React, {Component} from "react";
import {Header} from "../../components/Header/Header";
import {ChatContainer} from "../ChatContainer";
import {Profile}  from "../../components/Profile/Profile";

export class CurrentChatFields extends Component{
    addNewMessage=(id) => (newMessage)=>{
        this.props.addNewMessage(id)(newMessage);
    };
    render(){
        let pageToShow = "";
        if (this.props.location.pathname.includes("profile")){
            pageToShow = <Profile id={this.props.match.params.id} chat={this.props.chats[this.props.match.params.id]} />;
        }else {
            pageToShow= <ChatContainer id={this.props.match.params.id} chat={this.props.chats[this.props.match.params.id]} 
            addNewMessage={this.addNewMessage} />;
        }
        return <>
                    <Header id={this.props.match.params.id} chat={this.props.chats[this.props.match.params.id]} />
                    {pageToShow}
               </>
    }
}

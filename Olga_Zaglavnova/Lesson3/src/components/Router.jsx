import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import {Layout} from "../containers/Layout/Layout";

export class Router extends Component{
    onstructor(props){
        super(props);
        this.state = {
            chats:{
                "John": {
                    name: "John",
                    messages: [],
                    userAvatar: avatarsPath + "chatList_icon1.png"
                },
                "David": {
                    name: "David",
                    messages: [],
                    userAvatar: avatarsPath + "chatList_icon2.png"
                },
                "Cindy": {
                    name: "Cindy",
                    messages: [],
                    userAvatar: avatarsPath + "chatList_icon3.png"
                },
                "Julia": {
                    name: "Julia",
                    messages: [],
                    userAvatar: avatarsPath + "chatList_icon4.png"
                },
                "Allan": {
                    name: "Allan",
                    messages: [],
                    userAvatar: avatarsPath + "chatList_icon5.png"
                },
            },
        };
    };
    render(){
        return (
            <Switch>

            </Switch>
        )
    }
}
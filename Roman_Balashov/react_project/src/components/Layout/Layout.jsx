import React from "react";
import {ChatList} from "../ChatList/ChatList";
import {Header} from "../Header/Header";
import {Chat} from "../Chat/Chat";
import './Layout.css';

export class Layout extends React.Component {
    render() {
        return(
            <div className="layout-wrap">
                <Header/>
                <ChatList/>
                <Chat/>
            </div>
        )
    }
}
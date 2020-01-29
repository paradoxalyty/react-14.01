import React from "react";
import {ChatList} from "./ChatList";
import {Header} from "./Header";
import {Chat} from "./Chat";
import '../style';

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
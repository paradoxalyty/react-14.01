import React from "react";
import MessageList from "./MessageList";
import Header from "./Header";
import ChatList from "./ChatList";

export default class Layout extends React.Component {

    render() {
        return(
            <div className="layout">
                <Header/>
                <ChatList/>
                <MessageList />
            </div>
        )
    }
}
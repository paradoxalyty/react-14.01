import React, { Component } from "react";
import { ChatContainer } from "./ChatContainer";
import { ChatList } from '../components/ChatList/ChatList';
import { Header } from '../components/Header/Header';


export class Layout extends Component {
    render() {

        return (
            <div className="Layout">
                <Header />
                <ChatList />
                <ChatContainer />
            </div>
        )

    }
}

import React from "react"
import {ChatList} from "../ChatList/ChatList"
import {Header} from "..//Header/Header"
import {MessageList} from "../MessageField/MessageList"

export const Layout = () => {
    return (
        <div>
            <Header />
            <ChatList />
            <MessageList />
        </div>
    )
}
import React from "react";
import {Header} from "../Header/Header.jsx"
import {ChatList} from '../ChatList/ChatList.jsx';

export const Layout = () => {
    return (<>
    <Header /><ChatList/><div className="layout"></div>
    </>)
}


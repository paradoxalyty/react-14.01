import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { MessageField } from "../MessageField/MessageField";
import { Header } from "../Header/Header";
import { ChatList } from "../ChatList/ChatList";

import './Layout.css';

export class Layout extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="layout">
                    <Header/>
                    <main className="main">
                        <ChatList/>
                        <MessageField/>
                    </main>
                </div>
            </MuiThemeProvider>
        );
    }
}
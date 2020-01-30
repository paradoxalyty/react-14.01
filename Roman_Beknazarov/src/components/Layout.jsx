import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { MessageField } from "./MessageField";
import { Header } from "./Header";
import { ChatList } from "./ChatList";

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
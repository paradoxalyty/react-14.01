import React, { Component } from 'react';
import { ChatContainer } from './ChatContainer.jsx';
import { BrowserRouter, Switch, Route } from "react-router-dom";

export class App extends Component {



    render() {
        return (
            <BrowserRouter>
            <Switch>
                <Route path='/chats' exact component={ChatContainer}></Route>
                <Route path='/chats/:id' exact component={ChatContainer}/>
                <Route>
                </Route>
                <Route>
                </Route>
                <Route>
                </Route>
            </Switch>
            </BrowserRouter>
        )

    }
}


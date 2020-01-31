import React, { Component } from 'react';
import { ChatContainer } from './ChatContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";

export class App extends Component {  
    render() {
        return (
            <BrowserRouter>
               <Switch>
                   <Route path="/chats/" exact component={ChatContainer} />
                   <Route path="/chats/:id" exact component={ChatContainer} />
                   <Route path="/about">
                     it's about
                   </Route>
                   <Route path="/home">
                     it's home
                   </Route>
                   <Route path="/">
                     it's index
                   </Route>
               </Switch>
            </BrowserRouter>
        )
    }
}
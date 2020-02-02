import React, { Component } from "react";
import { ChatContainer } from "./ChatContainer";
import { ChatList } from '../components/ChatList/ChatList';
import { Header } from '../components/Header/Header';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import classnames from 'classnames';



export class Layout extends Component {
    render() {

        return (
            <BrowserRouter>
                <Header />
                <ChatList />
                <Switch>
                {/* <Route path="/" exact>
                    пук
                </Route> */}
                    <Route path="/profile/" exact component={Header} />
                    <Route path="/chats/" exact component={ChatContainer} />
                    <Route path="/chats/:id" exact component={ChatContainer} />
                    <Route path="/">404</Route>
                </Switch>
            </BrowserRouter>
        )

    }
}

// export class Layout extends Component {
//     render() {

//         return (
//             <>
//                 <Header />
//                 <ChatList />
//                 <ChatContainer />
//             </>
//         )

//     }
// }

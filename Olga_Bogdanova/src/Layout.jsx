import React, { Component } from "react";
import  ChatContainer  from "./containers/ChatContainer";
import { ChatList } from './components/ChatList/ChatList';
import { Header } from './components/Header/Header';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import classnames from 'classnames';
import {initStore} from './store/store'
import {Provider} from 'react-redux';
import {loadChats} from './store/chatAction';

const store = initStore();
store.dispatch(loadChats());
//лучше всего вставлять loadChats к инициализации store 
export class Layout extends Component {
    render() {

        return (
            <Provider store={store}>
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
            </Provider>

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

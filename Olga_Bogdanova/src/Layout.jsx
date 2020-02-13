import React, { Component } from 'react';
import  ChatContainer  from './containers/ChatContainer';
import ChatListContainer from './containers/ChatListContainer';
import { Header } from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import classnames from 'classnames';
import {initStore, history} from './store/store';
import {Provider} from 'react-redux';
import {loadChats} from './store/chatAction';
import {ConnectedRouter} from 'connected-react-router';

const store = initStore();
store.dispatch(loadChats());
//dispatch берет action и посылает его во все reduce, смотрит что изменилось и кладет это в новый state 
//лучше всего вставлять loadChats к инициализации store 
export class Layout extends Component {
    render() {

        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Header />
                    <ChatListContainer />
                    <Switch>
                        {/* <Route path="/" exact>
                    пук
                </Route> */}
                        <Route path="/profile/" exact component={Header} />
                        <Route path="/chats/" exact component={ChatContainer} />
                        <Route path="/chats/:id" exact component={ChatContainer} />
                        <Route path="/">404</Route>
                    </Switch>
                </ConnectedRouter>
            </Provider>

        );

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

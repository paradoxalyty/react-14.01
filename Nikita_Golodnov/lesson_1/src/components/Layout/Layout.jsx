import React from 'react'
import {Header} from '..//Header/Header'
import ChatContainer from '../../containers/ChatContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './Layout.css'
import {initStore, history} from '../../store/store'
import {Provider} from 'react-redux'
import {loadChats} from '../../store/chatAction'
import ChatListContainer from '../../containers/ChatListContainer'
import {ConnectedRouter} from 'connected-react-router'

const store = initStore ()
store.dispatch(loadChats ())

export const Layout = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}> 
                <div className="layout">
                    <Header />
                    <ChatListContainer />
                    <Switch>
                        <Route path="/chats/" exact component={ChatContainer} />
                        <Route path="/chats/:id" exact component={ChatContainer} />
                        <Route path="/about">
                        About us
                        </Route>
                        <Route path="/home">
                        Home page
                        </Route>
                        <Route path="/" exact>
                        404 not found
                        </Route>
                    </Switch>
                </div>
            </ConnectedRouter>
        </Provider>
    )
}
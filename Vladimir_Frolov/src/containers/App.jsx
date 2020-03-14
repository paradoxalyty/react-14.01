import React from "react";
import ChatContainer from "./ChatContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { initStore, history } from '../store/store'
import { loadChats } from '../store/chatActions';
import { Provider } from 'react-redux';
import { Header } from "../components/Header/Header";
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import { loadProfile } from "../store/profileActions";
export const ROBOT_NAME = 'Robot';


export const store = initStore();
const persistor = persistStore(store)
store.dispatch(loadChats())
store.dispatch(loadProfile())

export class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ConnectedRouter history={history}>
                        <Header />
                        <Switch>
                            <Route path="/" exact>
                                Root
                        </Route>
                            <Route path="/chats/" exact component={ChatContainer} />
                            <Route path="/chats/:id" exact component={ChatContainer} />
                            <Route path="/about">
                                It's about
                        </Route>
                            <Route path="/home">
                                It's home
                        </Route><Route path="/profile">
                                It's profile
                    </Route>
                            <Route path="/">
                                It's 404
                        </Route>
                        </Switch>
                    </ConnectedRouter>
                </PersistGate>
            </Provider>
        )
    }
}
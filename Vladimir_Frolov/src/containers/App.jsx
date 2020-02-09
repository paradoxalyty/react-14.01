import React from "react";
import ChatContainer from "./ChatContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {initStore} from '../store/store'
import {loadChats} from '../store/chatActions';
import { Provider } from 'react-redux';
import { Header } from "../components/Header/Header";



const store = initStore();
store.dispatch(loadChats())

export class App extends React.Component {
    
    render() {
        return (
            <Provider store={store}>
                <Header/>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact>
                            Root
                        </Route>
                        <Route path="/chats/" exact component={ChatContainer}/>
                        <Route path="/chats/:id" exact component={ChatContainer}/>
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
                </BrowserRouter>
            </Provider>
        )
    }
}
import React, {Component} from 'react';

import {Layout} from '../components/Layout/Layout';
import {initStore} from '../store/store';
import {Provider} from 'react-redux';
import {loadChats} from "../store/chatAction";

const store = initStore();
store.dispatch(loadChats());

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Layout/>
            </Provider>
        )
    }
}
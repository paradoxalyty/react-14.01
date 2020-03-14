import React, {Component} from 'react';

import {Layout} from '../components/Layout/Layout';
import {initStore} from '../store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {loadChats} from '../store/apiChatAction';

const {store, /*persistor*/} = initStore();
store.dispatch(loadChats());

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                {/*<PersistGate loading={null} persistor={persistor}>*/}
                    <Layout/>
                {/*</PersistGate>*/}
            </Provider>
        );
    }
}
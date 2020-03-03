import React from 'react';
import ReactDom from 'react-dom';
import Layout from './containers/Layout/Layout';
import {loadChats} from './store/chatAction';

import {Provider} from 'react-redux';
import {initStore} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';

const {store, persistor} = initStore();
store.dispatch(loadChats());

ReactDom.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Layout />
        </PersistGate>
    </Provider>, document.getElementById('root'));
import React, { Component } from 'react';
import ChatContainer from './ChatContainer.jsx';
import { Switch, Route } from "react-router-dom";
import { initStore, history, } from '../store/store';
import { Provider } from 'react-redux';
import { loadChats } from '../store/chatAction';
import { loadProfile } from '../store/profileAction';
import ProfileContainer from './ProfileContainer.jsx';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import ChatListContainer from './ChatListContainer.jsx';
import InstallPopup from '../components/InstallPopup/InstallPopup.jsx';


const store = initStore();
store.dispatch(loadChats());
store.dispatch(loadProfile());
const persistor = persistStore(store);


export class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ConnectedRouter history={history}>
                        <InstallPopup />
                        <Switch >
                            <Route path='/profile' exact component={ProfileContainer}></Route>
                            <Route path='/chats/:id' exact component={ChatContainer} />
                            <Route path='/chats' exact component={ChatListContainer}></Route>
                        </Switch>
                    </ConnectedRouter>
                </PersistGate>
            </Provider>
        )

    }
}


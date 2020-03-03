import React, { Component } from "react";
import './Layout.css';
import { Router } from "../Router/Router";
import { Provider } from "react-redux";
import { initStore } from "../../store/store";
import { loadChats } from "../../actions/chatActions";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = initStore();
store.dispatch(loadChats());

export class Layout extends Component {
    render() {
        return (
            <div className="layout-wrap">
                <Provider store={store}>
                    <PersistGate loading = {null} persistor={persistor}>
                        <Router />
                    </PersistGate>
                </Provider>
            </div>
        )
    }
}
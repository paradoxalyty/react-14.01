import React, { Component } from "react";
import './Layout.css';
import { Router } from "../Router/Router";
import { Provider } from "react-redux";
import { initStore } from "../../store/store";

export class Layout extends Component {
    render() {
        return (
            <div className="layout-wrap">
                <Provider store={ initStore() }>
                    <Router />
                </Provider>
            </div>
        )
    }
}
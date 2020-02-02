import React, {Component} from "react";
import {Header} from "../Header/Header";
import {Chat} from "../Chat/Chat";
import './Layout.css';
import { Router } from "../Router/Router";

export class Layout extends Component {
    render() {
        return(
            <div className="layout-wrap">
                <Header/>
                <Router />
            </div>
        )
    }
}
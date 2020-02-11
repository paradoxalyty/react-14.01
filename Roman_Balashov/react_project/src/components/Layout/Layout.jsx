import React, { Component } from "react";
import './Layout.css';
import { Router } from "../Router/Router";

export class Layout extends Component {
    render() {
        return (
            <div className="layout-wrap">
                <Router />
            </div>
        )
    }
}
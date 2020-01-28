import React from "react";
import ReactDom from "react-dom";
// import { App } from './components/MessageList/MessageList';
import {App} from './containers/App' // для запуска App-Counter

// ReactDom.render (<MessageList />, document.getElementById ('root'));
ReactDom.render (<App />, document.getElementById ('root'));
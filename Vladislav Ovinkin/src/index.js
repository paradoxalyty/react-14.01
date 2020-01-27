import React from "react";
import ReactDom from "react-dom";
import { MessageList } from './components/MessageList/MessageList';
// import {App} from './components/App' // для запуска App-Counter

ReactDom.render (<MessageList />, document.getElementById ('root'));
// ReactDom.render (<App />, document.getElementById ('root'));
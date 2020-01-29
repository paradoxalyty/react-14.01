import React from "react";
import ReactDom from "react-dom";
import {App} from './containers/App';
import {Layout} from "./containers/Layout/Layout";
import css from 'style.css';

ReactDom.render(<Layout />, document.getElementById("root"));
import React from "react";
import ReactDom from "react-dom";
import {App} from './App.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDom.render(
    <MuiThemeProvider>
    <App />
    </MuiThemeProvider>,
    document.getElementById('root')
 );
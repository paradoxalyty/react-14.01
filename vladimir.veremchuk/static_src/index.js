import React from "react";
import ReactDom from "react-dom";
import {App} from './components/App/App.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDom.render(
    <MuiThemeProvider>
    <App />
    </MuiThemeProvider>,
    document.getElementById('root')
 );
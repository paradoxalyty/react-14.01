import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {App} from './containers/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../css/styles.css';

ReactDOM.render(
    <MuiThemeProvider>
        <App/>
    </MuiThemeProvider>,

    document.getElementById('root'),
);
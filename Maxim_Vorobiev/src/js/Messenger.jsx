import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Layout} from './components/Layout/Layout';
import '../css/styles.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Messenger = () => (
    <Layout/>
);

ReactDOM.render(
    <MuiThemeProvider>
        <Messenger/>
    </MuiThemeProvider>,

    document.getElementById('root'),
);
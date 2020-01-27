import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Layout} from './components/Layout';
import '../css/styles.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Messenger extends Component {
    render() {
        return (
            <Layout/>
        )
    }
}

ReactDOM.render(
    <MuiThemeProvider>
        <Messenger/>
    </MuiThemeProvider>,

    document.getElementById('root'),
);
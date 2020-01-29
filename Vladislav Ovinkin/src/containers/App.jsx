import React, { Component } from "react";
// import { ChatContainer } from './ChatContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';

export class App extends Component {
    render () {
        return <Layout />
    };
}
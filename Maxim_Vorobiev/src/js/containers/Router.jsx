import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {App} from './App';

export class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' render={() => <App chatId={1}/>}/>
                <Route
                    exact
                    path='/chat/:chatId'
                    render={obj => <App
                        chatId={Number(obj.match.params.chatId)}
                    />
                    }
                />
                <Route path="/">
                    404 Error. The page you are looking for is not found.
                </Route>
            </Switch>
        )
    }
}
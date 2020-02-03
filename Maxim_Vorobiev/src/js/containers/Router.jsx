import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {App} from './App';

export class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={App}/>
                {/*<Route exact path='/chat/1/' render={() => <App chatId={1}/>}/>*/}
                <Route
                    exact
                    path='/chat/:chatId'
                    render={obj => <App
                        chatId={Number(obj.match.params.chatId)}
                    />
                    }
                />
            </Switch>
        )
    }
}
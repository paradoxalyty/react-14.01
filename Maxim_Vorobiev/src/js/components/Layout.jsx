import React, {Component} from 'react';
import {Header} from './Header';
import {ChatList} from './ChatList';
import {MessageField} from './MessageField';

export class Layout extends Component {
    render() {
        return (
            <>
                <Header/>

                <div className="react-messenger__wrapper">
                    <ChatList/>
                    <MessageField/>
                </div>
            </>
        )
    }
}
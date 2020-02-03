import React, {Component} from "react";
import {ChatContainer} from '../ChatContainer';
import {Header} from '../../components/Header/Header';
import {ChatList} from "../../components/ChatList/CharList";
import './Layout.scss';

export class Layout extends React.Component {
    render() {
        return <div className={'layout-box'}>
            <Header chatName={'Test-1'}/>
            <div className={'chat-container row'}>
                <ChatList/>
                <ChatContainer/>
            </div>
        </div>
    }
}

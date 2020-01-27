import React, {Component} from 'react';
import {Counter} from './Counter';

export class Link extends Component {
    state = {
        isShowCounter: false,
    };

    handleLink = (e) => {
        e.preventDefault();
        this.setState(({isShowCounter}) => ({isShowCounter: !isShowCounter}));
    };

    render() {
        const {isShowCounter} = this.state;

        return <>
            <a href="#" onClick={this.handleLink}>
                {(isShowCounter) ? 'Hide Stats' : 'Show Stats'}
            </a>

            {isShowCounter && <Counter newMessages={this.props.newMessages}
                                       totalMessages={this.props.totalMessages}/>}
        </>
    }
}
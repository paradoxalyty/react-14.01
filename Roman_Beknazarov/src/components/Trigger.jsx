import React, { Component } from 'react';
import { Counter } from './Counter';

export class Trigger extends Component {
    state = {
        isShowCounter: true,
        count: 0,
    };

    handleTrigger = () => {
        this.setState(({isShowCounter}) => ({isShowCounter: !isShowCounter}));
    };

    handleCount = (num) => {
        this.setState(({count}) => ({count: count + num}))
    };

    render() {
        const {count, isShowCounter} = this.state;
        return <>
            <button onClick={this.handleTrigger}>Trigger</button>
            <br/>
            <br/>
            {isShowCounter && <Counter count={count} onCount={this.handleCount}/>}
        </>
    }
}
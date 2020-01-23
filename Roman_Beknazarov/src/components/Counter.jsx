import React, { Component } from 'react';

//export const Counter = () => <span>It is a counter</span>

export class Counter extends Component {
    state = {
        //count: 0
    };

    interval = null;

    componentDidMount() {
        console.log('Child componentDidMount');
        this.interval = setInterval(() => console.log("It's fired"), 2000);
    }

    componentDidUpdate() {
        console.log('Child componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('Child componentWillUnmount');
        clearInterval(this.interval);
    }

    handleCount = (event) => {
        const num = +event.target.dataset.number;
        this.props.onCount(num);
    };

    render() {
        const {count} = this.props;
        return <span>
            <button data-number="-1" onClick={this.handleCount}>-1</button>
            {count}
            <button data-number="1" onClick={this.handleCount}>+1</button>
        </span>;
    }
}
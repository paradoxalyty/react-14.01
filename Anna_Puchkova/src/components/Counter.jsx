import React, { Component } from "react";
import PropTypes from "prop-types";

//export const Counter = () => <span>it is counter </span>;

export class Counter extends Component {
    state = {
     //  count: 0
    }
    static propTypes = {
        count: PropTypes.number,
    }
    interval = null;
    componentDidMount() {
        console.log("componentDidMount");
        this.interval = setInterval(() => console.log('test'), 2000)
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    componentWillUnmount() {
        console.log(" componentWillUnmount");
        
    }
    handleCount = (event) => {
        const num = +event.target.dataset.number;
        this.props.onCount(num);
    }
    render () {
       const {count} = this.props;
        return <span>
            <button onClick={this.handleCount} data-number="-1">-1</button>
            {count}
            <button onClick={this.handleCount} data-number="1">+1</button>
             </span>;
    }
}
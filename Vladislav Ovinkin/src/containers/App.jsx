import React, { Component } from "react";
import { Counter } from "../components/Counter"
import PropTypes from "prop-types";

export class App extends Component {
    state = {
        isShowCounter: true,
        count: 0,
    };
    static propTypes = {
        count: PropTypes.string,
    };
    handleTrigger = () => {
        this.setState (({isShowCounter}) => ({isShowCounter: !isShowCounter}));
    };
    handleCount = (num) => {
        this.setState (({count}) => ({ count: count + num }));
    };
    render () {
        const {count, isShowCounter} = this.state;
        return <>
            <button onClick={ this.handleTrigger }>Show/hide</button>
            <br />
            {isShowCounter && <Counter count={count} onCount={this.handleCount}/>}
        </>
    };
}
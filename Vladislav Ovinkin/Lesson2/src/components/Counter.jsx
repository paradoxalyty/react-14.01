import React, { Component } from "react";

// const Counter = () => <span>It's counter</span>;

class Counter extends Component {
    // constructor (props) {
    //     super (props);
    //     this.state = {
    //         count: 0
    //     };
    //     this.handleCount = this.handleCount.bind (this); // #4 правильный способ - отработает только один раз при создании объекта
    // }
    state = { // #5 работает так, если установлено @babel/plugin-proposal-class-properties и прописано в конфиге webpack'а
        count: 0
    }
    componentDidMount () {
        console.log ('componentDidMount');
    }
    componentDidUpdate () {
        console.log ('componentDidUpdate');
    }
    componentWillUnmount () {
        console.log ('componentWillUnmount');
    }
    // handleCount () { // эта запись теряет контекст при #5
    handleCount = () => { // #5
        console.log ('click!');
        // this.setState ({ count: this.state.count + 1 }) // правильно, но есть опасность периодического не срабатывания из-за ассинхронности
        // this.setState ((state) => ({ count: this.state.count + 1 })) // сработает гарантированно
        this.setState (({count}) => ({ count: count + 1 })) // сработает гарантированно + деструктуризация
    }
    render () {
        return <span>
            { this.state.count }
            {/* <button onClick={ this.handleCount }>+1</button> // #1 работать не будет - теряется контекст объекта, потому что в this записывается контекст события */}
            {/* <button onClick={ this.handleCount.bind (this) }>+1</button> // #2 так работать будет, но грозит при масштабировании потреблять много ресурсов */}
            {/* <button onClick={() => this.handleCount() }>+1</button> // #3 как в #2 накладные расходы, т.к. анонимная функция создаётся при каждом рендере */}
            <button onClick={this.handleCount}>+1</button> {/*-- #4 правильный вариант, такой же как #1, но тогда не было ничего прописано в конструкторе */}
        </span>;
    }
}

export { Counter };
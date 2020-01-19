import React from "react";
import ReactDom from "react-dom";

export default class NewMessage extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event){
        let newMsjObj = {name: "Я", content: this.state.value};
        this.props.addMessage(newMsjObj);
        this.setState({value: ""});

        event.preventDefault();
    }
    render() {
        return <form onSubmit={this.handleSubmit} className="newMessageForm">
            <label>
            <strong>Я: </strong>
            <input className="messageInput" value={this.state.value} onChange={this.handleChange}></input>
            </label>
            <input type="submit" value="Отправить" className="submitBtn" />
            </form>
        //return <div>Hello</div>
    }
    /*render() {
        return <form className="newMessageForm"><input className="messageInput" value={this.state.value} onChange={this.handleChange} /><input type="submit" value="Отправить" className="submitBtn" /></form>
        //return <div>Hello</div>
    }*/
}
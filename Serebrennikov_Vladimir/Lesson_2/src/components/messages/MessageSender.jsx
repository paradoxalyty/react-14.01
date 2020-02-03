import React, {Component} from "react";

export default class MessageSender extends Component {

  state = {
    value: ""
  };

  handleSubmit = () => { 
    this.props.handleSubmit(this.state.value);
    this.setState({
      value: ""
    })
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return(
      <div>
        <input onChange={this.handleChange} value={this.state.value} />
        <button onClick={this.handleSubmit}> Отправить </button>
      </div>
    )
  }
}
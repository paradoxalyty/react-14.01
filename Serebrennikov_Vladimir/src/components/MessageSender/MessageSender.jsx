import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './MessageSender.css';

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

  handleKeyUpSubmit = (e) => {
    if (e.keyCode === 13) {
      this.props.handleSubmit(this.state.value);
      this.setState({
        value: ""
      })
    }
  };

  handleChange = (e) => {
    this.setState({
      value: e.currentTarget.value
    })
  }

  render() {
    return (
      <div>
        <TextField
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUpSubmit}
          value={this.state.value}
          id="standard-full-width"
          label="Введите соообщение"
          autoFocus
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />
        <Button
          onClick={this.handleSubmit}
          variant="contained"
          color="primary"
          size="small"
          > Отправить </Button>
      </div>
    )
  }
}
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import './ChatForm.sass';
export class ChatForm extends React.Component {
    state = {
        name: 'Name',
        content: ''
    }

    handleInput = ({ currentTarget: { value, name } }) => {
        this.setState(() => ({ [name]: value }))
    }

  
    handleClick = () => {
        const { name, content } = this.state;
        this.props.onSendMessage({ name, content });
        this.setState({
            content: ''
          });
       
        }

    

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
      }

    render() {

        return (
            <div className='ChatForm'>
                <TextField label="Name" variant="filled" name='name' value={this.state.name} onChange={this.handleInput} type='Name' />
                <TextField label="Message" variant="filled" autoFocus name='content' value={this.state.content} onChange={this.handleInput} onKeyPress={this.handleKeyPress}/>
                <Button variant="contained" color="secondary" onClick={this.handleClick}>Отправить</Button>
            </div>);
    }
}

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired
}
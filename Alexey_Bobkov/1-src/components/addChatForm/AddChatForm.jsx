import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import './AddChatForm.sass';

export class AddChatForm extends React.Component {
    state = {
        name: '',
    }

    handleInput = ({ currentTarget: { value, name } }) => {
        this.setState(() => ({ [name]: value }))
    }
  
    handleAddChat = () => {
        const {  name } = this.state;
        this.props.addChat(name);
        
        }

    handleKeyPress = (e) => {
        
        if (e.key === 'Enter') {
            this.handleAddChat();
        }
      }

    render() {
        return (
            <div className='AddChatForm'>
                <TextField label="Name" variant="filled" name='name' value={this.state.name} onChange={this.handleInput} onKeyPress={this.handleKeyPress} type='Name' />
                <Button variant="contained" color="secondary" onClick={this.handleAddChat}>Добавить чат</Button>
            </div>);
    }
}
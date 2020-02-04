import React from 'react';
import Button from '@material-ui/core/Button';
import './ChatForm.css';

export class ChatForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
            error: false
        };
        this.handleOnClickAddMessage = this.handleOnClickAddMessage.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handOnChange = this.handOnChange.bind(this);
        this.ref_name = React.createRef();
        this.timeout;
    }

    handleKeyUp(event) {
        if (event.key === 'Enter') {
            this.addNewMessage(this.state.name, this.state.message);
        } else {
            this.setState({error: false})
        }
    }

    handOnChange(event) {
        let name = event.target.dataset.name;
        let new_state = {};

        new_state[name] = event.target.value;
        this.setState(new_state);
    }

    handleOnClickAddMessage() {
        this.props.addNewMessage(this.state.name, this.state.message);
        this.setState({
            name: '',
            message: '',
            error: false
        });
    }

    render() {
        return (<div className="ChatForm">
            {this.state.error ? <div className="error">Заполните оба поля</div> : ''}
            <div className="inputs"><input data-name="name" placeholder="ИМЯ" ref={this.ref_name}
                                           value={this.state.name}
                                           onChange={this.handOnChange}/>
                <input data-name="message" value={this.state.message} onKeyUp={this.handleKeyUp}
                       onChange={this.handOnChange} placeholder="СООБЩЕНИЕ"/></div>
            <Button variant="outlined" color="primary" onClick={this.handleOnClickAddMessage}>Добавить
                сообщение</Button>
        </div>)
    }
};
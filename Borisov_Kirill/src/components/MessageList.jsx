import React from "react";
import Message from "./Message";

export default class MessageList extends React.Component {

  state = {
    messages: this.props.messages
  }

  nextHumanIndex    = -1;
  nextHumanName     = ['Владелец мыши', 'Карус Бром', 'Карл Фридрих Иероним'];
  nextHumanContent  = ['Я нажал кнопку', 'О, шикарный суп наварили', 'Я знаю, вы благородный человек и в душе тоже против Англии.'];
  robotName         = 'Робот';

  handleClick = () => {
    this.nextHumanIndex = (this.nextHumanIndex >= this.nextHumanName.length-1) ? this.nextHumanIndex = 0 : this.nextHumanIndex + 1;
    this.setState({ messages: [ ...this.state.messages, {name:this.nextHumanName[this.nextHumanIndex], content: this.nextHumanContent[this.nextHumanIndex]} ] });
  }

  componentDidUpdate = () => {
        const lastMessage = this.state.messages[this.state.messages.length-1];
        if (lastMessage.name !== this.robotName) {
            let robotAnswer = '';
            switch (lastMessage.name) {
                case 'Владелец мыши':
                    robotAnswer = 'Молодец, ' + lastMessage.name + '. Так держать!';
                    break;
                case 'Карус Бром':
                    robotAnswer = 'О, ВЕЛИКИЙ суп наварили';
                    break;
                case 'Карл Фридрих Иероним':
                    robotAnswer = 'Да, в душе против. Да, она мне не нравится. Но я сижу и помалкиваю!';
                    break;
                default:
                    robotAnswer = 'WTF is going on?';
            }            

            robotAnswer = 'Ответ для ' + lastMessage.name + ' - ' + robotAnswer;

            setTimeout(
                () => { this.setState( { messages: [ ...this.state.messages, {name:this.robotName, content: robotAnswer} ] }) 
                }
            , 1000);
            
        }
  }

  render() {
    const messageElements = this.state.messages.map((message, index) => (
        <Message name={message.name} content={message.content} key={index} />));
    return <div>
            <button onClick={ this.handleClick }>Отправить сообщение</button>
            { messageElements }
        </div>    
  }
}

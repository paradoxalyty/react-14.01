import React from "react";
import ReactDom from "react-dom";
import MessageList from './MessageList';
import NewMessage from "./NewMessage";
import css from 'style.css';

export class ChatPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {messages: [{msgClass: "robot", name:"Робот", content: "Привет, Человек! Как дела?", time: this.getCurrentTime()}
            ],
            robotAnswers: ["Вот это да!", "ЗдОрово!", "Ишь ты!", "Да ты молодец!", "Очень интересно!"],
            isRobotAnswered: false
        };
    }

    getCurrentTime(){
        const currDate=new Date();
        return currDate.toTimeString().slice(0,8);
    }
    addNewMessage = (newMsg) => {
        newMsg.time = this.getCurrentTime();
        let messages = [...this.state.messages];
        messages.push(newMsg);
        this.setState({messages});
        this.setState({'isRobotAnswered': false});
    }
    robotAnswer= (idx) => {
        let messages = [...this.state.messages];
        messages.push({msgClass: "robot", name: "Робот", content: this.state.robotAnswers[idx], time: this.getCurrentTime()});
        this.setState({messages});
    };
    getAnswerIndex(){
        const min = 0;
        const max = this.state.robotAnswers.length - 1;
        return Math.round(min + Math.random() * (max - min));
    };
    componentDidUpdate () {
        if (!this.state.isRobotAnswered) {
            this.setState({'isRobotAnswered': true});
            const answerIdx = this.getAnswerIndex();
            setTimeout(() => {
                this.robotAnswer(answerIdx);
            }, 1000);
        }
    };
    render(){
        return <div className="container">
                <MessageList messages={this.state.messages} />
            <NewMessage addMessage={this.addNewMessage} />
            </div>
    }
}

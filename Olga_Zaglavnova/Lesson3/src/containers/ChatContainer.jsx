import React, {Component} from "react";
import PropTypes from "prop-types";
import {ChatPage} from '../components/ChatPage/ChatPage';
//import css from 'style.css';

const RobotClass = "robot";

export class ChatContainer extends Component {
    constructor(props){
        super(props);
        this.state = {messages: [{msgClass: "robot", name:"Робот", message: "Привет, Человек! Как дела?", time: this.getCurrentTime()}
            ],
            robotAnswers: ["Вот это да!", "ЗдОрово!", "Ишь ты!", "Да ты молодец!", "Очень интересно!"]
        };
    }

    getCurrentTime(){
        const currDate=new Date();
        return currDate.toTimeString().slice(0,8);
    }
    addNewMessage = (message) => {
        
        message.time = this.getCurrentTime();
        //message.msgClass = "guest";
        this.setState((state) => ({messages: [...state.messages, message]}));
        // let messages = [...this.state.messages];
        // messages.push(message);
        // this.setState({messages});
        // this.setState((state)=>{messages});
        this.setState((state) => ({'isRobotAnswered': false}));
        //console.log('chatContainer.jsx addNewMessage isWORKING! ', this.state.messages);
    }
    robotAnswer= () => {
        const answerIdx = this.getAnswerIndex();
        return this.state.robotAnswers[answerIdx];
        // let messages = [...this.state.messages];
        // messages.push({msgClass: "robot", name: "Робот", content: this.state.robotAnswers[answerIdx], time: this.getCurrentTime()});
        // this.setState((state)=>{messages});
    };
    getAnswerIndex(){
        const min = 0;
        const max = this.state.robotAnswers.length - 1;
        return Math.round(min + Math.random() * (max - min));
    };
    componentDidUpdate () {
        // if (!this.state.isRobotAnswered) {
        //     this.setState({'isRobotAnswered': true});
        //     setTimeout(() => {
        //         this.robotAnswer();
        //     }, 1000);
        // }
        
        setTimeout(()=>{
            const lastMessage = this.state.messages[this.state.messages.length-1];
            if (lastMessage.msgClass !== RobotClass){
                this.addNewMessage({msgClass: RobotClass, name: "Робот", message: this.robotAnswer()});
            }
        }, 3000)
    };
    render(){
        const {messages} = this.state;
        return <ChatPage {...{messages, onSubmitMessage: this.addNewMessage}} />
    }
}



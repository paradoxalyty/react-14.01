import React, {Component} from "react";
import PropTypes from "prop-types";
import {ChatPage} from '../components/ChatPage/ChatPage';
//import css from 'style.css';

const RobotClass = "robot";

export class ChatContainer extends Component {
    constructor(props){
        super(props);
        this.state = { 
            robotAnswers: ["Вот это да!", "ЗдОрово!", "Ишь ты!", "Да ты молодец!", "Очень интересно!"]
        };
    }

    getCurrentTime(){
        const currDate=new Date();
        return currDate.toTimeString().slice(0,8);
    }
    addNewMessage = (id) => (message) => {
        
        message.time = this.getCurrentTime();
        // const {id, chat} = this.props;
        // const newChat = {...chat, 
        //     messages: [...chat.messages, message]};
        //     this.props.addNewMessage(id, newChat);
        this.props.addNewMessage(id)(message);
    }
    robotAnswer= () => {
        const answerIdx = this.getAnswerIndex();
        return this.state.robotAnswers[answerIdx];
    };
    getAnswerIndex(){
        const min = 0;
        const max = this.state.robotAnswers.length - 1;
        return Math.round(min + Math.random() * (max - min));
    };
    updateComponent(prevState){
        const {id, chat} = this.props;
        const robotMessage={msgClass: RobotClass, name:"Робот", message:""};
        if (chat.messages.length === 0){
            robotMessage.message = "Привет, "+ id +"! Как дела?";
        } else{
            robotMessage.message = this.robotAnswer();
        }
        this.addNewMessage(id)(robotMessage);
        // if (id && chat && chat.messages){
        //     if (chat.messages.length === 0){
        //         this.addNewMessage(id)(firstRobotMessage);
        //     }else{
        //         setTimeout(()=>{
        //             const messages = chat.messages;
        //             const lastMessage = messages[messages.length-1];
        //             if (lastMessage.msgClass !== RobotClass){
        //                 this.addNewMessage(id)({msgClass: RobotClass, name: "Робот", message: this.robotAnswer()});
        //             }
        //         }, 3000)
        //     }
        // }
        
    }
    componentDidMount(){
        this.updateComponent();
    };
    componentDidUpdate (prevProps, prevState) {
        this.updateComponent(prevState);
    };
    componentWillUnmount(){
        clearTimeout();
    };
    render(){
        //Логику вынести!
        
        const {id, chat} = this.props;
        if (id && chat){
            return <ChatPage {...{messages: chat.messages, userName: chat.name, onSubmitMessage: this.addNewMessage(id)}} />
        } else {
            <span>Вы не выбрали чат</span>
        }
    }
}



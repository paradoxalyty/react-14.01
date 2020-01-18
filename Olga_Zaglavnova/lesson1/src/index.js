import React from "react";
import ReactDom from "react-dom";
import MessageList from './components/messageList';
import NewMessage from "./components/newMessage";
import css from 'style.css';

class ChatPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {messages: [{name:"Робот", content: "Привет. Человек!"},
                {name: "Я", content: "Привет, Робот!"},
                {name:"Робот", content: "Как дела?"},
                {name: "Я", content: "Да неплохо, идут..."},
                {name:"Робот", content: "Рад за тебя!"}
            ],
            robotAnswers: ["Вот это да!", "ЗдОрово!", "Ишь ты!", "Да ты молодец!", "Очень интересно!"],
            isRobotAnswered: false
        };

        this.addNewMessage = this.addNewMessage.bind(this);
    }

    addNewMessage(newMsg){
        this.state.messages.push(newMsg);
        this.forceUpdate();
        this.state.isRobotAnswered = false;
    }
    robotAnswer(idx){
        this.state.messages.push({name: "Робот", content: this.state.robotAnswers[idx]});
        this.forceUpdate();
        this.state.isRobotAnswered = true;
    };
    getAnswerIndex(){
        const min = 0;
        const max = this.state.robotAnswers.length - 1;
        return Math.round(min + Math.random() * (max - min));
    };
    componentDidUpdate(){
        if (!this.state.isRobotAnswered) {
            const answerIdx = this.getAnswerIndex();
            this.robotAnswer(answerIdx);
        }
    };
    render(){
        return <div className="container">
                <MessageList messages={this.state.messages} />
            <NewMessage addMessage={this.addNewMessage} />
            </div>
    }
}

const chatCode = <ChatPage />

ReactDom.render(chatCode, document.getElementById("root"));
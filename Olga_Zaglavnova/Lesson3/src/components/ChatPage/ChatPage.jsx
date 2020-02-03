import React, {useRef} from "react";
import PropTypes from "prop-types";
import ScrollableFeed from 'react-scrollable-feed';
import {MessageList} from '../MessageList/MessageList';
import {Message} from '../Message/Message';
import {NewMessage} from "../NewMessage/NewMessage";

import css from './ChatPage.css';

export const ChatPage = ({messages, userName, onSubmitMessage}) => {
    return (
        <ScrollableFeed forceScroll className="container">
            <MessageList messages={messages} />
            <NewMessage userName={userName} onSubmitMessage={onSubmitMessage} />
        </ScrollableFeed>
    );
};
ChatPage.propTypes={
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)).isRequired,
    onSubmitMessage: PropTypes.func.isRequired
}

// export class ChatPage extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {messages: [{msgClass: "robot", name:"Робот", content: "Привет, Человек! Как дела?", time: this.getCurrentTime()}
//             ],
//             robotAnswers: ["Вот это да!", "ЗдОрово!", "Ишь ты!", "Да ты молодец!", "Очень интересно!"],
//             isRobotAnswered: false
//         };
//     }

//     getCurrentTime(){
//         const currDate=new Date();
//         return currDate.toTimeString().slice(0,8);
//     }
//     addNewMessage = (newMsg) => {
//         newMsg.time = this.getCurrentTime();
//         let messages = [...this.state.messages];
//         messages.push(newMsg);
//         this.setState({messages});
//         this.setState({'isRobotAnswered': false});
//     }
//     robotAnswer= (idx) => {
//         let messages = [...this.state.messages];
//         messages.push({msgClass: "robot", name: "Робот", content: this.state.robotAnswers[idx], time: this.getCurrentTime()});
//         this.setState({messages});
//     };
//     getAnswerIndex(){
//         const min = 0;
//         const max = this.state.robotAnswers.length - 1;
//         return Math.round(min + Math.random() * (max - min));
//     };
//     componentDidUpdate () {
//         if (!this.state.isRobotAnswered) {
//             this.setState({'isRobotAnswered': true});
//             const answerIdx = this.getAnswerIndex();
//             setTimeout(() => {
//                 this.robotAnswer(answerIdx);
//             }, 1000);
//         }
//     };
//     render(){
//         return <div className="container">
//                 <MessageList messages={this.state.messages} />
//             <NewMessage addMessage={this.addNewMessage} />
//             </div>
//     }
// }



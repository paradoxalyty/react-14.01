import React, {Component} from "react";
import PropTypes from "prop-types";
import {ChatPage} from '../components/ChatPage/ChatPage';
import {bindActionCreators} from "redux";
import {addMessage, loadChats} from "../store/chatAction";
import {connect} from "react-redux";

const RobotClass = "robot";
const robotAnswers = ["Вот это да!", "ЗдОрово!", "Ишь ты!", "Да ты молодец!", "Очень интересно!"];

class ChatContainer extends Component {

    // robotAnswer= () => {
    //     const answerIdx = this.getAnswerIndex();
    //     return robotAnswers[answerIdx];
    // };
    // getAnswerIndex = () =>{
    //     const min = 0;
    //     const max = robotAnswers.length - 1;
    //     return Math.round(min + Math.random() * (max - min));
    // };
    // componentDidUpdate(){
    //     console.log("ChatContainer componentDidUpdate: ", this.props);
    //     //this.props.addMessage({this.props.ma, RobotClass, "Робот", this.robotAnswer()});
    // };
}
const mapStateToProps=({chatReducer}, props)=>{

    const {id} = props;
    //console.log("ChatContainer mapStateToProps: id = ", id, ", chatReducer.chats = ", chatReducer.chats);
    return {
       //chat: id ? chatReducer.chats ? chatReducer.chats[id] : null : null
        messages: id ? chatReducer.chats[id] ? chatReducer.chats[id].messages : null : null,
        userName: id ? chatReducer.chats[id] ? chatReducer.chats[id].name : null : null,
    }
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({loadChats, addMessage}, dispatch)
};

const mergeProps =(stateProps, dispatchProps, props) => {
    const {id} = props;
    return {
        ...stateProps,
        onSubmitMessage: ({msgClass, name, message}) => dispatchProps.addMessage(id, msgClass, name, message),
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChatPage);

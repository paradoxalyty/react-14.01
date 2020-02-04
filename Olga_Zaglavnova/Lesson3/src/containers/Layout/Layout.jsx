import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {CurrentChatFields} from "../CurrentChatFields/CurrentChatFields";
import {Profile} from "../../components/Profile/Profile";
import {Header} from "../../components/Header/Header";
import ChatListContainer from "../ChatListContainer";
import {AddChat} from "../../components/AddChat/AddChat";
//REDUX
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import {loadChats, addMessage} from "../../store/chatAction";

import "./Layout.css";

const avatarsPath = "/src/components/ChatList/img/";

// const RobotClass = "robot";
// const robotAnswers = ["Вот это да!", "ЗдОрово!", "Ишь ты!", "Да ты молодец!", "Очень интересно!"];

//store.dispatch();

class Layout extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         chats:{
    //             "John": {
    //                 name: "John",
    //                 messages: [],
    //                 userAvatar: avatarsPath + "chatList_icon1.png"
    //             },
    //             "David": {
    //                 name: "David",
    //                 messages: [],
    //                 userAvatar: avatarsPath + "chatList_icon2.png"
    //             },
    //             "Cindy": {
    //                 name: "Cindy",
    //                 messages: [],
    //                 userAvatar: avatarsPath + "chatList_icon3.png"
    //             },
    //             "Julia": {
    //                 name: "Julia",
    //                 messages: [],
    //                 userAvatar: avatarsPath + "chatList_icon4.png"
    //             },
    //             "Allan": {
    //                 name: "Allan",
    //                 messages: [],
    //                 userAvatar: avatarsPath + "chatList_icon5.png"
    //             },
    //         }
    //     };
    // };


    // addNewMessage = (id) => (newMessage)=>{
    //     const {chats} = this.props;
    //     // console.log("Layout addNewMessage:", id, newMessage)
    //     // this.props.addMessage(id, newMessage.msgClass, newMessage.name, newMessage.message, this.getCurrentTime());
    //     if (newMessage.msgClass!=="robot" || chats[id].messages.length===0){
    //         //this.addMsg(id)(newMessage);
    //         this.props.addMessage(id, newMessage.msgClass, newMessage.name, newMessage.message, this.getCurrentTime());
    //     } else {
    //         setTimeout(()=>{
    //             const lastMessage = this.props.chats[id].messages[this.props.chats[id].messages.length-1];
    //             if (lastMessage.msgClass !== "robot"){
    //                 this.props.addMessage(id, newMessage.msgClass, newMessage.name, newMessage.message, this.getCurrentTime());
    //             }
    //         }, 3000);
    //    }
    //
    // };
    addChat =(newUserName)=> {
        console.log(newUserName);
        
        const {chats} = this.state;

        const newChat = {name: newUserName, 
                          messages: [],
                          userAvatar: "/src/components/ChatList/img/chatList_icon.png"
                        };
        
        // this.setState((state) => ({chats: {...state.chats, 
        //     [newUserName]:newChat}
        // }));

        this.setState({chats: {...chats, 
                [newUserName]:newChat}
            });
        
        console.log(this.state.chats);
    };
    componentDidMount(){
        //this.props.loadChats();
    };
    render(){
        const {chats} = this.props;
        return (
            <BrowserRouter>
                <div  className="Layout">
                    <ChatListContainer />
                    <Switch>
                        <Route exact path="/">
                            <Header />
                            <div className="Layout__index">
                                Welcome to my first ReactJS chat
                            </div>
                        </Route>
                        <Route exact path="/chats/add" render={(props) => (
                            <>
                                <Header id="Добавление нового чата"/>
                                <div className="Layout__index" />
                            </>)} />
                        <Route path="/chats/:id" component={CurrentChatFields} />
                        <Route path="/">
                            Page is not found
                        </Route>
                    </Switch>
                </div>
        </BrowserRouter>);
    }
};

const mapStateToProps=({chatReducer})=>{
    return {chats: chatReducer.chats}
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({loadChats, addMessage}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
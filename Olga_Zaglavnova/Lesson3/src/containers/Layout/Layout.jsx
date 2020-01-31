import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {CurrentChatFields} from "../CurrentChatFields/CurrentChatFields";
import {Profile} from "../../components/Profile/Profile";
import {Header} from "../../components/Header/Header";
import {ChatList} from "../../components/ChatList/ChatList";
import {AddChat} from "../../components/AddChat/AddChat";
import "./Layout.css";

const avatarsPath = "/src/components/ChatList/img/";

export class Layout extends Component{
    constructor(props){
        super(props);
        this.state = {
            chats:{
                "John": {
                    name: "John",
                    messages: [],
                    userAvatar: avatarsPath + "chatList_icon1.png"
                },
                "David": {
                    name: "David",
                    messages: [],
                    userAvatar: avatarsPath + "chatList_icon2.png"
                },
                "Cindy": {
                    name: "Cindy",
                    messages: [],
                    userAvatar: avatarsPath + "chatList_icon3.png"
                },
                "Julia": {
                    name: "Julia",
                    messages: [],
                    userAvatar: avatarsPath + "chatList_icon4.png"
                },
                "Allan": {
                    name: "Allan",
                    messages: [],
                    userAvatar: avatarsPath + "chatList_icon5.png"
                },
        }
        };
    };
    getCurrentTime(){
        const currDate=new Date();
        return currDate.toTimeString().slice(0,8);
    }
    addMsg=(id)=>(newMessage)=>{
        this.setState((state) => ({chats:
            {...state.chats, 
                [id]:{name: state.chats[id].name, 
                      messages: [...state.chats[id].messages, newMessage],
                      userAvatar: state.chats[id].userAvatar
                    }
                }
        }));
    };
    addNewMessage=(id) => (newMessage)=>{
        if (newMessage.msgClass!=="robot" || this.state.chats[id].messages.length===0){
            this.addMsg(id)(newMessage);
        } else {
            setTimeout(()=>{
                const lastMessage = this.state.chats[id].messages[this.state.chats[id].messages.length-1];
                if (lastMessage.msgClass !== "robot"){
                    this.setState((state) => ({chats:
                        {...state.chats, 
                            [id]:{name: state.chats[id].name, 
                                  messages: [...state.chats[id].messages, newMessage],
                                  userAvatar: state.chats[id].userAvatar
                                }
                            }
                    }));
                }
            }, 3000);
        }
        
    };
    addChat =(newUserName)=> {
        console.log(newUserName);
        
        const newChats = {...this.state.chats, newUserName: {name: newUserName, 
                          messages: [],
                          userAvatar: "/src/components/ChatList/img/chatList_icon.png"
                        }
                    };
        
        this.setState({
            chats: newChats
        });
        
        console.log(this.state.chats);
    };
    render(){
        const {chats, users, currentUser} = this.state;
        return (<BrowserRouter>
                <div  className="Layout">
                    <ChatList {...{chats}} addChat={this.addChat} />
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
                            <AddChat id="" chatKeys={Object.keys(this.state.chats)} addNewChat={this.addChat} />
                            </>)} />
                        <Route path="/chats/:id" render={(props) => (
                            <CurrentChatFields {...props} chats={chats} addNewMessage={this.addNewMessage} />)} />
                        
                        <Route path="/">
                            Page is not found
                        </Route>
                    </Switch>
                </div>
                </BrowserRouter>);
    }
}
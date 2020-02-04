import React from "react";
import {ChatList} from "../components/ChatList/ChatList";
import {ChatContainer} from "./ChatContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom";

export class App extends React.Component {
    state = {
        chats: {
            1: {
                name: 'Chat 1',
                messages: [
                    {name: "Ivan", content: "Hello! It's chat one!"},
                    {name: "Ivan", content: "How are you?"},
                ]
            },
            2: {
                name: 'Chat 2',
                messages: [
                    {name: "Den", content: "Hi from chat 2"},
                ]
            },
            3: {
                name: 'Chat 3',
                messages: []
            }
        },
    };
    handleSendMessage = (id) => (name, message) => {
        this.setState((state) => (
            {
                chats: {
                    ...state.chats,
                    [id]: {
                        name: state.chats[id].name,
                        messages: [
                            ...state.chats[id].messages,
                            {name: name, content: message},
                        ]
                    },
                }
            }))
    };

    addChat = (event) => {
        this.setState((state) => {
            let keys = Object.keys(state.chats);
            let newId = parseInt(keys[keys.length - 1]) + 1;
            return {
                chats: {
                    ...state.chats,
                    [newId]: {
                        name: "Chat " + newId,
                        messages: []
                    },
                }
            }
        });
        event.preventDefault();
    };

    render() {
        return (
            <>
                <header>
                    <div><a href="/">Root</a>
                        <a href="/home">Home</a>
                        <a href="/about">About</a>
                        <a
                        href="/profile">Profile</a>
                    </div>
                    <ChatList chats={this.state.chats}/>

                    <a href="#" onClick={this.addChat}>add chat</a>
                </header>

                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact>
                            Root
                        </Route>
                        <Route path="/chats/" exact component={ChatContainer}/>
                        <Route path="/chats/:id" exact
                               render={(props) => <ChatContainer {...props} chats={this.state.chats}
                                                                 handleSendMessage={this.handleSendMessage}/>}/>
                        <Route path="/about">
                            It's about
                        </Route>
                        <Route path="/home">
                            It's home
                        </Route><Route path="/profile">
                        It's profile
                    </Route>
                        <Route path="/">
                            It's 404
                        </Route>
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}
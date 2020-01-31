import React, {useState} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import "./AddChat.css";

export const AddChat =({id, chatKeys, addNewChat}) => {
    const [name, setName] = useState("User");
    const [userExists, setUserExists] = useState("");
    const userAvatar="/src/components/ChatList/img/chatList_icon.png";
    const AddNewChatItem=(e)=>{
        //chatKeys.map((key, i) => {} key==name? true: false));
        if(chatKeys.indexOf(name, 0)<0){
            setUserExists("");
            addNewChat(name);
        }
        else{
            setUserExists("Пользователь с  таким именем уже существует");
        }
    };
    return (
            <div className="AddChat">
                <h3>{name}</h3>
                <Avatar alt={name} src={userAvatar} className="Header__avatar"/>
                <label>
                    Имя:
                    <input type="text" value={name} onChange={({currentTarget: {value}})=>setName(value)} />
                </label>
                <p>{userExists}</p>
                <button className="AddChat__btn" onClick={AddNewChatItem}>Добавить</button>
            </div> );
};
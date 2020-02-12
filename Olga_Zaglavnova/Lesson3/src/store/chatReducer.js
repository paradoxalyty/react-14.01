import {handleActions} from "redux-actions";
import {loadChats, addMessage} from "./chatAction";

const defaultState={
    chats: {}
};

const avatarsPath = "/src/components/ChatList/img/";
const RobotClass = "robot";
// const robotAnswers = ["Вот это да!", "ЗдОрово!", "Ишь ты!", "Да ты молодец!", "Очень интересно!"];

const getCurrentTime = () => {
    const currDate=new Date();
    return currDate.toTimeString().slice(0,8);
};

// const robotAnswer= () => {
//     const answerIdx = this.getAnswerIndex();
//     return robotAnswers[answerIdx];
// };
// const getAnswerIndex = () =>{
//     const min = 0;
//     const max = robotAnswers.length - 1;
//     return Math.round(min + Math.random() * (max - min));
// };

const addMessageToChat =(state, id, msgClass, name, message) => {
    const time = getCurrentTime();
    return {
        ...state,
        chats:
            {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: [...state.chats[id].messages, {msgClass, name, message, time}],
                    userAvatar: state.chats[id].userAvatar
                }
            }
    }
};

export default handleActions({
    [loadChats]:(state)=>{
        return {...state, 
            chats: {
                "John": {
                    name: "John",
                    messages: [{msgClass: RobotClass, name:"Робот", message:"Привет, John! Как дела?", time: getCurrentTime()}],
                    userAvatar: avatarsPath + "chatList_icon1.png"
                },
                "David": {
                    name: "David",
                    messages: [{msgClass: RobotClass, name:"Робот", message:"Привет, David! Как дела?", time: getCurrentTime()}],
                    userAvatar: avatarsPath + "chatList_icon2.png"
                },
                "Cindy": {
                    name: "Cindy",
                    messages: [{msgClass: RobotClass, name:"Робот", message:"Привет, Cindy! Как дела?", time: getCurrentTime()}],
                    userAvatar: avatarsPath + "chatList_icon3.png"
                },
                "Julia": {
                    name: "Julia",
                    messages: [{msgClass: RobotClass, name:"Робот", message:"Привет, Julia! Как дела?", time: getCurrentTime()}],
                    userAvatar: avatarsPath + "chatList_icon4.png"
                },
                "Allan": {
                    name: "Allan",
                    messages: [{msgClass: RobotClass, name:"Робот", message:"Привет, Allan! Как дела?", time: getCurrentTime()}],
                    userAvatar: avatarsPath + "chatList_icon5.png"
                },
            }
        }
    },
    [addMessage]: (state, {payload: {id, msgClass, name, message}})=> {
        if (msgClass !== RobotClass) {
            return addMessageToChat(state, id, msgClass, name, message);
            // setTimeout(() => {
            //     if (state.chats[id].messages[state.chats[id].messages.length - 1].msgClass !== RobotClass) {
            //         addMessageToChat(state, id, RobotClass, "Робот", robotAnswer());
            //     }
            // }, 1000);
        } else {
            if (state.chats[id].messages.length === 0) {
                return addMessageToChat(state, id, msgClass, name, message);
            } else {
                setTimeout(() => {
                    if (state.chats[id].messages[state.chats[id].messages.length -1].msgClass !== RobotClass) {
                        return addMessageToChat(state, id, msgClass, name, message);
                    }
                }, 1000);
            }
        }
        }

}, defaultState);
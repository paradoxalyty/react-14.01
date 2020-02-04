import {handleActions} from "redux-actions"
import {addMessage, loadChats} from "./chatAction"

const defaultState = {
    chats: {}
}

export default handleActions ({
    [loadChats]: (state) => {
        return {
           ...state,
           chats: {
                1: {
                    name: 'Chat 1',
                    messages: [
                        {text:"Seneka", content: "Per aspera ad Astra"},
                        {text:"Descartes", content: "Cogito, ergo sum"},
                        {text:"God", content: "Lorem ipsum dolor"}
                    ]
                },
                2: {
                    name: 'Chat 2',
                    messages: [
                        {text:"Voenkomat", content: "Vam povestka! Zavtra yavites v raspredelitelniy punkt k 8 chasam"}
                    ]
                },
                3: {
                    name: 'Chat 3',
                    messages: [

                    ]
                }
            } 
        }
    },
    [addMessage]: (state, {payload: {id, text, content}}) => {
        return  {...state, 
                chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: [
                        ...state.chats[id].messages,
                        {text, content},
                    ]
                }
            }
        }
    }
}, defaultState)
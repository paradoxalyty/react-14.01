import {switchPage, setIsActive} from "./chatAction";
import {push} from 'connected-react-router';

export default store => next => action => {
    if (action.type === switchPage.toString()){
        next(action);
        const {id, linkStr} = action.payload;
        //if (id && linkStr !=="") {
            let isActiveClass = "";
            const chatsKeys = Object.keys(store.getState().chatReducer.chats);
            for (let i = 0; i < chatsKeys.length; i++) {
                if (i == id) {
                    isActiveClass = "isActive";
                } else {
                    isActiveClass = ""
                }
                store.dispatch(setIsActive(chatsKeys[i], isActiveClass));
            }
       // }
        store.dispatch(push(linkStr));
    } else {
        next(action);
    };

};
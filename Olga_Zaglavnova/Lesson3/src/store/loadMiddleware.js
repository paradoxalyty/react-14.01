import {loadChats, switchPage} from "./chatAction";
import {push} from 'connected-react-router';

export default store => next => action => {
    //const {id, name} = action.payload;
    if (action.type === loadChats.toString()){
        next(action);
        let path= store.getState().router.location.pathname;
        const name = path.substring(path.lastIndexOf("/")+1, path.length);
        let id =  Object.keys(store.getState().chatReducer.chats).indexOf(name);
        // if (id < 0) {
        //     id = 0;
        //     path = '/chats/'+ Object.keys(store.getState().chatReducer.chats)[0];
        // }
        // store.dispatch(switchPage(id, path));
        if (id && id >= 0){
            store.dispatch(switchPage(id, path));
        } else
        {
            console.log("loadMiddleware is WORKING here");
            store.dispatch(push('/'));
           // console.log("Hi");
        }

    } else {
        next(action);
    };

};
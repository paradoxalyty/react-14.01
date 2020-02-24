import { addChat, deleteChat } from '../store/chatAction';
// import { push } from 'connected-react-router';



export default store => next => action => {


    if (action.type === deleteChat.toString()) {
        next(action);
        console.log(action);
        store.dispatch(push(`/chats/1`));


    }
    next(action);

}




//     if (action.type === addChat.toString()) {
//         next(action);
//         store.dispatch(push('/chats/' + action.payload.name));

//     } else {

//         next(action);

//     }
// };
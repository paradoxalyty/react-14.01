import { addMessage } from './chatAction';

// export default function botMiddleware(store){
//     return function (next){
//         return function (action){
//             console.log(action.type);
//             next(action);
//         }
//     }
// }

export default store => next => action => {
    // console.log(action.type);
    if(action.type === addMessage.toString() && action.payload.name !== 'Robot'){
        const {name, id} = action.payload;
        setTimeout(() => store.dispatch(addMessage(id, 'Robot', `Hello, ${name}, I'm Robot in chat ${id}`)), 1500)
    }
    next(action);
}
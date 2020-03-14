import {addMessage} from './chatAction';

// export default function botMiddleware(store) {
//     return function (next) {
//         return function (action) {
//             console.log(action);
//             next(action);
//         }
//     }
// }
let timers = {};

export default store => next => action => {
    if(action.type === addMessage.toString() && action.payload.name !== 'Robot'){
        const {id, name} = action.payload;
        clearTimeout(timers[id]);
        timers[id] = setTimeout(() => store.dispatch(addMessage(id, 'Robot',  `Hello, ${name}, I'm a Robot in chat ${id}`)), 1000);
    }
    next(action);
}; 
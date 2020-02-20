import { addMessage } from './chatAction';

// export default function botMiddleware (store) {
//     return function (next) {
//         return function (action) {
//             console.log (action);
//             next (action);
//         }
//     }
// }

export default store => next => action => {
    if (action.type === addMessage.toString() && action.payload.name !== 'chatBot') {
        const {id, name} = action.payload;
        setTimeout (() => store.dispatch (addMessage (id, 'chatBot', `Hi, ${name}, I'm a robot in chat ${id}!`)), 3000);
    }
    next (action);
}

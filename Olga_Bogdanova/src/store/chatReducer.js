import {handleActions} from 'redux-actions';
import {loadChats, addMessage} from './chatAction';

const defaultState = {
  chats: {}

};
//
export default handleActions ({
  [loadChats]: (state) =>{
    return {
      ...state,
      chats: {
          1: {
              name: 'Chat 1',
              messages: [
                  { name: 'Vlad', content: 'Hay!' },
                  { name: 'Vlad', content: 'How are you?' }
              ]
          },
          2: {
              name: 'Chat 2',
              messages: [
                  { name: 'Olga', content: 'Hay!' },
                  { name: 'Olga', content: 'How are you?' }
              ]
          },
          3: {
              name: 'Chat 3',
              messages: [
                  { name: 'Platon', content: 'Hay!' },
                  { name: 'Platon', content: 'How are you?' }
              ]
          }
      }
    };
  },
  [addMessage]: (state, {payload: {id, name, content}}) => {
    return {
      ...state,
      chats: {
        ...state.chats,
        [id]: {
            name: state.chats[id].name,
            messages: [
                ...state.chats[id].messages,
                {name, content},
            ]
        },
    }
    };


  }
  //[]чтобы получить значения и записать в свойства объекта 

}, defaultState);
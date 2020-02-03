import React from 'react';
import {Layout} from "./components/Layout/Layout.jsx";
import {initStore} from './store/store.js';
import {Provider} from 'react-redux';
import {loadChats} from './store/chatAction.js';

const store = initStore();
store.dispatch(loadChats());

export class App extends React.Component {
   render() {
       return (<>
           <Provider store={store}>
           <Layout />
           </Provider>
           </>
       )
   }
}
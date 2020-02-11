import React from 'react';
import { push } from 'connected-react-router';
import {store} from '../../containers/App'
import './ChatList.css';

export const ChatList = ({chats}) =>
    (<div className='ChatList'>
        <ul>{chats.map(({id, name, is_active}) => (
            <li key={id} className={(is_active?'BotAnswered':'')} onClick={()=>{store.dispatch(push('/chats/'+id))}}>{name}</li>))}
        </ul>
    </div>);
import React from 'react';
import { push } from 'connected-react-router';
import { store } from '../../containers/App'
import CircularProgress from '@material-ui/core/CircularProgress'
import './ChatList.css';

export const ChatList = ({ chats, chatsLoading, chatsLoadError }) => {
    console.log(chatsLoading)
    if (chatsLoading) {
        return <div className='ChatList'><CircularProgress /></div>
    } else {
    const error = chatsLoadError?<div className="error">{'Ошибка загрузки чатов: '+chatsLoadError}</div>:''
        return (<div className='ChatList'>
            {error}
            <ul>{chats.map(({ id, name, is_active }) => (
                <li key={id} className={(is_active ? 'BotAnswered' : '')} onClick={() => { store.dispatch(push('/chats/' + id)) }}>{name}</li>))}
            </ul>
        </div>)
    }
};
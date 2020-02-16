import React from 'react';
import './ChatList.sass';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import classnames from 'classnames';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { AddChatForm } from '../AddChatForm/AddChatForm';



export const ChatList = ({ chatsList, addChat, push }) => {

    return (

        <div className='ChatList'>
            <List>
                {chatsList.map(({ id, name, unread }) => {
                    let NMclass = classnames('', { 'New-message': unread == true })
                    return (
                        <ListItem
                            className={NMclass}
                            key={id}
                            onClick={() => push('/chats/' + id)}>
                            <ChatBubbleOutlineOutlinedIcon />
                            {name} {unread && 'New Messages!'}
                        </ListItem>
                    )
                })}

                <ListItem>
                    <AddChatForm addChat={addChat} />
                </ListItem>
            </List>

        </div >

    );
}


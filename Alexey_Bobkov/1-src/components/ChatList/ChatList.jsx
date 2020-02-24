import React from 'react';
import './ChatList.sass';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import classnames from 'classnames';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { AddChatForm } from '../AddChatForm/AddChatForm';
import DeleteIcon from '@material-ui/icons/Delete';


export const ChatList = ({ chatsList, addChat, deleteChat, push }) => {

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
                            <DeleteIcon value={name} className="deleteIcon" onClick={deleteChat} />
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


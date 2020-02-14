import React from 'react';
import './ChatList.sass';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { AddChatForm } from '../AddChatForm/AddChatForm';


export const ChatList = ({ chatsList, addChat, push }) =>
    
    (<div className='ChatList'>
        <List>
            {chatsList.map(({ id, name }) => 
                <ListItem
                    key={id}
                    onClick = {() => push('/chats/'+id)}>
                    <ChatBubbleOutlineOutlinedIcon />
                    {name}
                </ListItem>)}
            <ListItem> 
                <AddChatForm addChat={addChat}/>
            </ListItem>
        </List>

    </div>);

































// export const ChatList = ({ chats }) => {

//     return (

//         (<div className='ChatList'>

//             <List>
//                 <Link to='/chats/'>
//                     <ListItem>
//                         <ListItemIcon>
//                             <ChatBubbleOutlineOutlinedIcon />
//                         </ListItemIcon>

//                     </ListItem>
//                 </Link>
//                 <Divider />
//                 <Link to='/chats/2'>
//                     <ListItem>
//                         <ListItemIcon>
//                             <ChatBubbleOutlineOutlinedIcon />
//                         </ListItemIcon>
//                         {chats[2].name}
//                     </ListItem>
//                 </Link>
//                 <Divider />
//                 <Link to='/chats/3'>
//                     <ListItem>
//                         <ListItemIcon>
//                             <ChatBubbleOutlineOutlinedIcon />
//                         </ListItemIcon>
//                         Чат 3
//         </ListItem>
//                 </Link>
//                 <Divider />
//                 <Link to='/chats/4'>
//                     <ListItem>
//                         <ListItemIcon>
//                             <ChatBubbleOutlineOutlinedIcon />
//                         </ListItemIcon>
//                         Чат 4
//         </ListItem>
//                 </Link>
//                 <Divider />
//                 <Link to='/chats/5'>
//                     <ListItem>
//                         <ListItemIcon>
//                             <ChatBubbleOutlineOutlinedIcon />
//                         </ListItemIcon>
//                         Чат 5
//         </ListItem>
//                 </Link>
//                 <Divider />
//             </List>
//         </div>)

//     )
// }

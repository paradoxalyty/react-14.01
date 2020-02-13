import React from 'react';
import './ChatList.sass';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { Link } from 'react-router-dom';


export const ChatList = ({ chatsList }) =>

    (<div className='ChatList'>
        <List>
            {chatsList.map(({ id, name }) =>
                <ListItem key={id}>

                    <Link to={'/chats/' + id}>
                        <ListItemIcon>
                            <ChatBubbleOutlineOutlinedIcon />
                        </ListItemIcon>
                        {name}
                    </Link>< Divider />

                </ListItem>)}
            <ListItem> <input type='text' /><button>Добавить чат</button>
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

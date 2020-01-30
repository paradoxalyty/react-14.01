import React from 'react';
import './ChatList.sass';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
//import InboxIcon from '@material-ui/icons/Inbox';
export const ChatList = () =>
    (<div className='ChatList'>
    
<List>
    <ListItem><ListItemIcon><ChatBubbleOutlineOutlinedIcon></ChatBubbleOutlineOutlinedIcon></ListItemIcon>Чат 1</ListItem>
    <Divider />
    <ListItem><ListItemIcon><ChatBubbleOutlineOutlinedIcon></ChatBubbleOutlineOutlinedIcon></ListItemIcon>Чат 2</ListItem>
    <Divider />
    <ListItem><ListItemIcon><ChatBubbleOutlineOutlinedIcon></ChatBubbleOutlineOutlinedIcon></ListItemIcon>Чат 3</ListItem>
    <Divider />
    <ListItem><ListItemIcon><ChatBubbleOutlineOutlinedIcon></ChatBubbleOutlineOutlinedIcon></ListItemIcon>Чат 4</ListItem>
    <Divider />
    <ListItem><ListItemIcon><ChatBubbleOutlineOutlinedIcon></ChatBubbleOutlineOutlinedIcon></ListItemIcon>Чат 5</ListItem>
</List>

        </div>);
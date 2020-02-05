import React from "react";
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './ChatList.css'


export const ChatList = ({chatList, activeChatId, onChatChange}) => {
    const [selectedIndex, setSelectedIndex] = React.useState(1); // подсветка в списке чата
    // const [selectedIndex, setSelectedIndex] = React.useState(); // нет подсветки

    const handleListItemClick = (event, index) => {
        setSelectedIndex (index);
    }

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    return (<div className="chatList">
        <List component="nav">
            {Object.keys (chatList).map (id => 
                <ListItemLink key={id}
                selected={selectedIndex === id-1}
                onClick={event => handleListItemClick (event, id-1)}
                href={"/chats/" + id}> 
                    <ListItemText primary={chatList[id].name} />
                </ListItemLink>)
            }       
        </List>
    </div>);
}
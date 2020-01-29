import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './ChatList.css'


export const ChatList = () => {
    // const [selectedIndex, setSelectedIndex] = React.useState(0); // подсветка в списке чата 1
    const [selectedIndex, setSelectedIndex] = React.useState(); // нет подсветки

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    }

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    return (<div className="chatList">
        <List component="nav">
            <ListItemLink 
            selected={selectedIndex === 0}
            onClick={event => handleListItemClick(event, 0)}
            href="/chats/1">
                <ListItemText primary="Anna" />
            </ListItemLink>
            <ListItemLink 
            selected={selectedIndex === 1}
            onClick={event => handleListItemClick(event, 1)}
            href="/chats/2">
                <ListItemText primary="Elena" />
            </ListItemLink>
            <ListItemLink
            selected={selectedIndex === 2}
            onClick={event => handleListItemClick(event, 2)}
            href="/chats/3">
                <ListItemText primary="Olga" />
            </ListItemLink>
        </List>
    </div>);
}
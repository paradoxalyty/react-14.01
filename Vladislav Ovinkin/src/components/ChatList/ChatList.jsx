import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './ChatList.css'

export const ChatList = (props) => {
    const {chatList, pathId} = props;
    const [selectedIndex, setSelectedIndex] = React.useState(pathId - 1); // подсветка в списке чата
    // const [selectedIndex, setSelectedIndex] = React.useState(); // нет подсветки
    const handleListItemClick = (event, index) => {
        setSelectedIndex (index);
        // onChatChange (index+1);
    }

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    console.log (chatList);

    return (<div className="chatList">
        <List component="nav">
            <ListItemLink 
            selected={selectedIndex === 0}
            onClick={event => handleListItemClick(event, 0)}
            href="/Anna">
                <ListItemText primary="Anna" />
            </ListItemLink>
            <ListItemLink 
            selected={selectedIndex === 1}
            onClick={event => handleListItemClick(event, 1)}
            href="/Elena">
                <ListItemText primary="Elena" />
            </ListItemLink>
            <ListItemLink
            selected={selectedIndex === 2}
            onClick={event => handleListItemClick(event, 2)}
            href="/Olga">
                <ListItemText primary="Olga" />
            </ListItemLink>
        </List>
    </div>);
}
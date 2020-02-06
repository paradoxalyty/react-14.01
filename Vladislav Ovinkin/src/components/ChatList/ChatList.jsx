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

    // console.log (chatList);

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
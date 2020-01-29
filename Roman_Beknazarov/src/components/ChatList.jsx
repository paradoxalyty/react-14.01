import React, {Component} from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export class ChatList extends Component {

    render() {
        return <List className="ChatList">
            <ListItem className="chat chat1">chat 1</ListItem>
            <ListItem className="chat chat2">chat 2</ListItem>
            <ListItem className="chat chat3">chat 3</ListItem>
        </List>
    }
}
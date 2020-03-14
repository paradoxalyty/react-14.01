import React, { useState } from "react";
import "./ChatList.css";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SendIcon from "@material-ui/icons/Send";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export const ChatList = ({ chats, activeChat, addChat, deleteChat, push }) => {
  const classes = useStyles();
  const [title, setTitle] = useState("");

  const handleNavigate = link => {
    push(link);
  };

  const handleClik = () => {
    if (title) {
      addChat({ title });
      setTitle("");
    }
  };

  const handleKeyUp = () => {
    if (title && event.keyCode === 13 && event.ctrlKey) {
      addChat({ title });
      setTitle("");
    }
  };

  const handleDeleteClik = chatId => {
    deleteChat(chatId);
  };

  const chatElements = chats.map(({ chatId, title }) => (
    <ListItem button selected={chatId === activeChat} key={chatId}>
      <ListItemIcon onClick={() => handleNavigate(`/chats/${chatId}`)}>
        <SendIcon color="primary" />
      </ListItemIcon>
      <ListItemText
        onClick={() => handleNavigate(`/chats/${chatId}`)}
        primary={title}
      />
      <DeleteIcon color="primary" onClick={() => handleDeleteClik(chatId)} />
    </ListItem>
  ));

  return (
    <List className="ChatList">
      {chatElements}
      <ListItem>
        <ListItemIcon>
          <AddIcon color="primary" onClick={handleClik} />
        </ListItemIcon>
        <TextField
          id="standard-basic"
          label="Новый чат"
          value={title}
          onChange={({ currentTarget: { value } }) => setTitle(value)}
          onKeyUp={handleKeyUp}
        />
      </ListItem>
    </List>
  );
};

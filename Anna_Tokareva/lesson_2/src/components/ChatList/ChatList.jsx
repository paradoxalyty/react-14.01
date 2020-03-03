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
  const [name, setName] = useState("");

  const handleNavigate = link => {
    push(link);
  };

  const handleClik = () => {
    if (name) {
      let chatId = parseInt(chats[chats.length - 1].id) + 1;
      addChat({ name, chatId });
      setName("");
    }
  };

  const handleKeyUp = () => {
    if (name && event.keyCode === 13 && event.ctrlKey) {
      let chatId = parseInt(chats[chats.length - 1].id) + 1;
      addChat({ name, chatId });
      setName("");
    }
  };

  const handleDeleteClik = chatId => {
    deleteChat(chatId);
    //if (chatId === currentChat) handleNavigate(`/chats/`);
  };

  const chatElements = chats.map(({ id, name }) => (
    <ListItem button selected={id === activeChat} key={id}>
      <ListItemIcon onClick={() => handleNavigate(`/chats/${id}`)}>
        <SendIcon />
      </ListItemIcon>
      <ListItemText
        onClick={() => handleNavigate(`/chats/${id}`)}
        primary={name}
      />
      <DeleteIcon onClick={() => handleDeleteClik(id)} />
    </ListItem>
  ));

  return (
    <List className="ChatList">
      {chatElements}
      <ListItem>
        <ListItemIcon>
          <AddIcon onClick={handleClik} />
        </ListItemIcon>
        <TextField
          id="standard-basic"
          label="Новый чат"
          value={name}
          onChange={({ currentTarget: { value } }) => setName(value)}
          onKeyUp={handleKeyUp}
        />
      </ListItem>
    </List>
  );
};

/*
export const ChatList = ({ chats }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  return (
    <List className="ChatList">
      <Link to="/chats/1" className="chatLink">
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Чат 1" />
        </ListItem>
      </Link>

      <Link to="/chats/2" className="chatLink">
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Чат 2" />
        </ListItem>
      </Link>

      <Link to="/chats/3" className="chatLink">
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Чат 3" />
        </ListItem>
      </Link>

      <ListItem>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <TextField id="standard-basic" label="Новый чат" />
      </ListItem>
    </List>
  );
};
*/

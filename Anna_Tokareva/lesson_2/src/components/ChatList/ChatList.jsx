import React from "react";
import "./ChatList.css";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SendIcon from "@material-ui/icons/Send";

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

export const ChatList = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  return (
    <List className="ChatList">
      <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Чат 1" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Чат 2" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Чат 3" />
      </ListItem>
    </List>
  );
};

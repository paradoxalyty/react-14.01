import React from "react";
import "./Header.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className="Header">
      <Typography variant="h6" color="inherit">
        Чат 1
      </Typography>
    </AppBar>
  );
};

import React from "react";
import "./Header.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

export const Header = props => {
  const classes = useStyles();
  const { id } = props.match.params;
  return (
    <AppBar position="static" className="Header">
      <Typography variant="h6" color="inherit">
        Чат {id}
      </Typography>
      <Link to="/profile" className="profileLink">
        Мой профиль
      </Link>
    </AppBar>
  );
};

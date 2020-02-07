import React, { Component } from "react";
import { Header } from "../Header/Header";
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Typography from '@material-ui/core/Typography';
import "./Profile.css";

export class Profile extends Component { 
  render() {
    return (
        <Container maxWidth="md">
          <Header>Profile</Header>
          <div className="profile">
            <Avatar>
              <ImageIcon />
            </Avatar>
            <Typography>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem optio, fuga facere voluptatem, aut sequi porro assumenda dicta quasi voluptates nostrum! Maiores repellendus et facilis autem amet eveniet. Doloremque, ut!
            </Typography>
          </div>
        </Container>
    );
  }
}

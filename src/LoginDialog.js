import React, { Component } from 'react';
import Button from '../node_modules/material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '../node_modules/material-ui/Dialog';

import Slide from 'material-ui/transitions/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
class LoginDialog extends React.Component {
  
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button color='contrast' onClick={this.handleClickOpen}>Login</Button>
        <Dialog open={this.state.open} 
            onRequestClose={this.handleRequestClose}
            transition={Transition}
            keepMounted>
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleRequestClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}




export default LoginDialog;

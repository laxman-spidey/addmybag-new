import React, { Component } from 'react';
import Button from '../node_modules/material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '../node_modules/material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import LoginDialogContent from './LoginDialogContent';
import firebase, { auth} from './FirebaseConfig.js';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
class LoginDialog extends React.Component {
   constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };
  
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        this.setState({isLoggedIn: true});  
      } 
    });
  }
  logout = () => {
    auth.signOut().then(() => {
        this.setState({
            user: null
        });
        this.setState({isLoggedIn: false});
    })
  }
  onLoginCompleted = (success) => {
    if(success) {
      this.handleRequestClose();
      this.setState({isLoggedIn: true});
    }
    else {
      console.log("login failed");
    }
  }
  
  handleLoginClick = () => {
    // this.setState({isLoggedIn: true});
    this.handleClickOpen();
  }

  handleLogoutClick = () => {
    this.logout(); 
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if (isLoggedIn) {
      button = <Button color='contrast' label='login'  onClick={this.handleLogoutClick} >logout</Button>;
    } else {
      button = <Button color='contrast' label='logout' onClick={this.handleLoginClick} >login</Button>;
    }
    return (
      <div>
        {button}
        <Dialog open={this.state.open} 
            onRequestClose={this.handleRequestClose}
            transition={Transition}
            keepMounted 
            className="no-padding login-dialog"
            >
          
          <DialogContent className="no-padding">
            <DialogContentText className="no-padding">
              <LoginDialogContent onLoginCompleted={this.onLoginCompleted} className="no-padding"/>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default LoginDialog;

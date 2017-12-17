import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../node_modules/material-ui/styles';
import AppBar from '../node_modules/material-ui/AppBar';
import Tabs, { Tab } from '../node_modules/material-ui/Tabs';
import Typography from '../node_modules/material-ui/Typography';
import MenuItem from '../node_modules/material-ui/Menu/MenuItem';
import TextField from '../node_modules/material-ui/TextField';
import Grid from '../node_modules/material-ui/Grid';
import Button from '../node_modules/material-ui/Button';
import Divider from '../node_modules/material-ui/Divider';
import './App.css';
import { white, red } from '../node_modules/material-ui/colors';
import IconButton from "./IconButton";

// import './FirebaseConfig.js';
import firebase, { auth, provider } from './FirebaseConfig.js';
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
   container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class LoginDialogContent extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleRequestClose = () => {
    console.log("closing dialog");
    this.setState({ open: false });
  };
    
  onSuccessfulLogin = () => {
    this.props.onLoginCompleted(true);
  }
  googleLogin = () => {
    
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    auth.signInWithPopup(provider)
      .then((result) => {
        var token = result.credential.accessToken;
        console.log(token);
        var user = result.user;
        this.onSuccessfulLogin();
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        var email = error.email;
        var credential = error.credential;
    });
  }
  

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const redcolor = red[500];

    return (
      <div className="login-dialog">
        <AppBar position="static">
          <div>
            <p className="dialog-title">Identify Youself</p>
          </div>
        </AppBar>
        <Tabs value={value} onChange={this.handleChange} color='white' fullWidth>
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>
        {value === 0 &&<TabContainer>
        <Grid container justify='center' direction='column'> 
          <TextField
            required
            id="required"
            label="Email"
            defaultValue="test@gmail.com"
            margin="normal"
          />
          <TextField
          required
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
        
          <Grid style={{marginTop: 4}} container justify='flex-end' direction='row' alignItems='flex-end' spacing={8} > 
            <Button raised color="accent" >Login</Button>
          </Grid>
          <Divider style={{marginTop: 10}} />
          <Typography  color={redcolor} className='red'>
           ** We recommend you to login with social account for extended security.
          </Typography>
        <IconButton  className="icon-button" imageSrc="./img/gplus.png" label="Sign in with Google" color="accent" onClick={this.googleLogin}/>
        
        <IconButton className="icon-button" imageSrc="./img/fb.png" label="Sign in with Facebook" color="primary"/>
        
        </Grid>
        </TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
      </div>
    );
  }
}

LoginDialogContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default LoginDialogContent;
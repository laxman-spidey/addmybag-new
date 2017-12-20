import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './AppBar.js';
import PropTypes from 'prop-types';
import Divider from '../node_modules/material-ui/Divider';
import Grid from '../node_modules/material-ui/Grid';
import Paper from '../node_modules/material-ui/Paper';
import Typography from '../node_modules/material-ui/Typography';
import Travelcard from './Travelcard.js';

import ReactGoogleAutocomplete from './autocomplete.js';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});
  
class App extends React.Component {
  

  

  render() { 
    return (
      <div className="App">
        <ButtonAppBar />
        <Grid container justify='center' align-items='center' direction='row' spacing={24}>
          <div  className="action-card" >
            <Travelcard image="./img/aeroplane.png" text="I'm Traveling"/>
          </div>
          <div  className="action-card"  >
            <Travelcard image="./img/baggage.png" text="I have a bag"/>
          </div>
        </Grid>
        <ReactGoogleAutocomplete />
      </div>
      
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default App;

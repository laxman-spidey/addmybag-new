import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../node_modules/material-ui/styles';
import AppBar from '../node_modules/material-ui/AppBar';
import Toolbar from '../node_modules/material-ui/Toolbar';
import Typography from '../node_modules/material-ui/Typography';
import Button from '../node_modules/material-ui/Button';
import IconButton from '../node_modules/material-ui/IconButton';
import MenuIcon from '../node_modules/material-ui-icons/Menu';
import Grid from '../node_modules/material-ui/Grid';

const styles = {
  root: {
    width: '100%',
    flexGrow : 1
  },
  flex: {
    alignItems:'right',
    
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
      
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container justify='space-between' direction='row'> 
          <Typography type="title" color="inherit" className={classes.flex}>
            Add My Bag
          </Typography>
          <Button color="contrast">Login</Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);


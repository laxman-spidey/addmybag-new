import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../node_modules/material-ui/styles';
import Card, { CardActions, CardContent, CardMedia,CardTitle } from '../node_modules/material-ui/Card';
import Typography from '../node_modules/material-ui/Typography';
import Button from '../node_modules/material-ui/Button';
import './App.css';
import aeroplaneImage from './img/airplane.png';
import { white, red } from '../node_modules/material-ui/colors';


const styles = {
  card: {
    maxWidth: 300,
  },
  media: {
    height: 300,
  },
};

function Travelcard(props) {
  const { classes } = props;
  
  return (
    <div className="container">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require(""+props.image)}
          title="Contemplative Reptile"
        />
        <div className="front-layer">
          
          
          <p style={{color: white, fontSize: 30}}>
          {props.text}
          </p>  
          
          

        </div>
      </Card>
    </div>
  );
}

Travelcard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Travelcard);

import React, { Component } from 'react';
import './App.css';
import Button from '../node_modules/material-ui/Button';
import Grid from '../node_modules/material-ui/Grid';


class IconButton extends React.Component {
    render() {
        return(
            
            <Button style={{margin: 5}} className="icon-button" raised color={this.props.color}  onClick={this.props.onClick}>
                <img className='icon' src={require(""+this.props.imageSrc)} />
                <span >{this.props.label}</span>
            </Button>
            
            
        );
    }
}
export default IconButton;
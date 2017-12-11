import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './AppBar.js';

  
class App extends React.Component {
  

  render() {
    return (
      <div className="App">
        <ButtonAppBar />
      </div>
    );
  }
}

export default App;

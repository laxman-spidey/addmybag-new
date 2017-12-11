import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './AppBar.js';
import LoginDialog from './LoginDialog.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar />
      </div>
    );
  }
}

export default App;

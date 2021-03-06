import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React in the Server</h2>
        </div>
        <p className="App-intro">{this.props.text}</p>
      </div>
    );
  }
}

export default App;
import React, { Component } from "react";
import logo from "./logo.svg";
import Questions from "./components/Questions";
import "./App.css";
import Rules from "./components/Rules";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Questions />
        {/* <Rules /> */}
      </div>
    );
  }
}

export default App;

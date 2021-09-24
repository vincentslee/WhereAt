import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import NewEventForm from "./components/NewEventForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewEventForm></NewEventForm>
      </div>
    );
  }
}

export default App;

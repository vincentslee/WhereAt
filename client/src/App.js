import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import NewEventForm from "./components/NewEventForm";
import ShowItems from "./components/ShowItems";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewEventForm/>
        <ShowItems/>
      </div>
    );
  }
}

export default App;

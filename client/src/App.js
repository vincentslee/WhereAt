import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import NewEventForm from "./components/NewEventForm";
import ShowItems from "./components/ShowItems";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App container-fluid justify-content-center">
        <Header/>
        <NewEventForm/>
        <ShowItems/>
      </div>
    );
  }
}

export default App;

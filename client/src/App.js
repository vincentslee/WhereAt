import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import NewEventForm from "./components/NewEventForm";
import ShowItems from "./components/ShowItems";
import Header from "./components/Header";

import {isMobile} from 'react-device-detect';

const content = (
  <div className="App container-fluid justify-content-center">
    <Header/>
    <NewEventForm/>
    <ShowItems/>
  </div>
)

const desktop = (
  <div style={{color: 'black', backgroundColor: 'white'}}>
    <h1>This website is mobile only.</h1>
    <a href="https://www.browserstack.com/guide/view-mobile-version-of-website-on-chrome" target="_blank" rel="noopener noreferrer">If you would like to learn how to view a mobile website on desktop click here, follow the instructions and refresh the page</a>
  </div>
)

class App extends Component {
  render() {
    if (isMobile) {
      return content;
    } else {
      return desktop;
    }
  }
}




export default App;

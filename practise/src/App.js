import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        Coding Pill
      </div>
    )
  }
}



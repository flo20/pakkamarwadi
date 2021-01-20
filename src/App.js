import React, { Component } from "react";
import Landing from "./pages/Landing";
import "./style/_app.scss";
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Landing />
      </div>
    );
  }
}

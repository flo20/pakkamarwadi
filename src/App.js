import React, { Component } from "react";
import Landing from "./pages/Landing";
import Result from "./pages/Result";
import "./style/_app.scss";
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='pc'>
          <Landing />
        </div>

        <div className='mob'>
          <Result />
        </div>
      </div>
    );
  }
}

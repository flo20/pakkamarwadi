import React, { Component } from "react";
import Hero from "../assets/newbg_crop.png";

export default class Image extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "100vh" }}>
        <img
          src={Hero}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
    );
  }
}

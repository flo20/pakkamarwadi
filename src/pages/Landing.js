import React, { Component } from "react";

import "../style/pages/_landing.scss";

import Banner from "../component/Banner";
import Header from "../component/Header";
import PersonalData from "../component/PersonalData";
import Experties from "../component/Experties";
import Work from "../component/Work";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

export default class Landing extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { scrollTop: 0 };
  // }

  listenScrollEvent() {
    console.log("Scroll event detected!");
  }

  render() {
    return (
      <div onScroll={this.listenScrollEvent} className='home'>
        <div className='banner'>
          <Header />
          <Banner />
          <PersonalData />
          <Experties />
          <Work />
          <Blog />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

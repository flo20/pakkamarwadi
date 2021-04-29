import React, { Component } from "react";

import "../style/pages/_landing.scss";

import Banner from "../component/Banner";
import Header from "../component/Header";
import PersonalData from "../component/PersonalData";
import Experties from "../component/Skills";
import Work from "../component/Work";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

import scrollToComponent from "react-scroll-to-component";
import Image from "../component/Image";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth, theme: true };
  }

  listenScrollEvent() {
    console.log("Scroll event detected!");
  }

  componentDidMount() {
    scrollToComponent(this.Blue, {
      offset: 0,
      align: "middle",
      duration: 500,
      ease: "inCirc",
    });
  }

  themeChange = () => {
    this.setState({
      theme: !this.state.theme,
    });
  };
  render() {
    return (
      <div onScroll={this.listenScrollEvent} className='home'>
        <div className='banner'>
          <Header
            theme={this.state.theme}
            themeChange={() => this.themeChange()}
            home={() =>
              scrollToComponent(this.Home, {
                offset: 0,
                align: "top",
                duration: 1500,
              })
            }
            experties={() =>
              scrollToComponent(this.Experties, {
                offset: 0,
                align: "top",
                duration: 1500,
              })
            }
            project={() =>
              scrollToComponent(this.Project, {
                offset: 0,
                align: "top",
                duration: 1500,
              })
            }
            blog={() =>
              scrollToComponent(this.Blog, {
                offset: 0,
                align: "top",
                duration: 1500,
              })
            }
            contact={() =>
              scrollToComponent(this.Contact, {
                offset: 0,
                align: "top",
                duration: 1500,
              })
            }
          />

          <Banner
            theme={this.state.theme}
            contact={() =>
              scrollToComponent(this.Contact, {
                offset: 0,
                align: "top",
                duration: 1500,
              })
            }
            ref={(section) => {
              this.Home = section;
            }}
          />
          <PersonalData theme={this.state.theme} />
          <Experties
            theme={this.state.theme}
            ref={(section) => {
              this.Experties = section;
            }}
          />
          <Work
            theme={this.state.theme}
            ref={(section) => {
              this.Project = section;
            }}
          />

          {/* <Education /> */}

          <Blog
            theme={this.state.theme}
            ref={(section) => {
              this.Blog = section;
            }}
          />
          <Contact
            theme={this.state.theme}
            ref={(section) => {
              this.Contact = section;
            }}
          />
          {this.state.windowWidth <= 768 ? <Image /> : null}

          <Footer theme={this.state.theme} />

          {/* <section
            className='violet'
            ref={(section) => {
              this.Violet = section;
            }}>
            Violet
          </section> */}
          {/* <section
            className='indigo'
            ref={(section) => {
              this.Indigo = section;
            }}>
            Indigo
          </section>
          <section
            className='blue'
            ref={(section) => {
              this.Blue = section;
            }}>
            Blue
          </section>
          <section
            className='green'
            ref={(section) => {
              this.Green = section;
            }}>
            Green
          </section>
          <section
            className='yellow'
            ref={(section) => {
              this.Yellow = section;
            }}>
            Yellow
          </section>
          <section
            className='orange'
            ref={(section) => {
              this.Orange = section;
            }}>
            Orange
          </section>
          <section
            className='red'
            ref={(section) => {
              this.Red = section;
            }}>
            Red
          </section> */}
        </div>
      </div>
    );
  }
}

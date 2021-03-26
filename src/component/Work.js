import React, { Component } from "react";
import { Card, Radio, Button } from "antd";

import { RightOutlined } from "@ant-design/icons";
import "../style/component/_work.scss";
import Monorbit from "../assets/monorbit.png";
import Ecommerce from "../assets/ecommerce.png";
import Calculator from "../assets/calculator.png";
import Funtube from "../assets/funtube.png";
import Airbnb from "../assets/airbnb.png";
import Social from "../assets/thesocial.png";
export default class Work extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "Monorbit",
          img: Monorbit,
          github_link: "#",
          live_link: "https://business.monorbit.com/",
        },

        {
          id: 2,
          name: "Ecommerce",
          img: Ecommerce,
          github_link: "https://github.com/ShravanMeena/ecommerce",
          live_link: "https://ecommerce0799.herokuapp.com/",
        },
        {
          id: 6,
          name: "Social App",
          img: Social,
          github_link:
            "https://github.com/ShravanMeena/Social_connect-with-world",
          live_link: "https://social0799.herokuapp.com/",
        },
        {
          id: 3,
          name: "Funtube",
          img: Funtube,
          github_link: "https://github.com/ShravanMeena/funtube",
          live_link: "https://github.com/ShravanMeena/funtube",
        },
        {
          id: 4,
          name: "Airbnb",
          img: Airbnb,
          github_link:
            "https://github.com/ShravanMeena/Airnb-Clone-App-In-React-Native",
          live_link:
            "https://github.com/ShravanMeena/Airnb-Clone-App-In-React-Native",
        },

        {
          id: 5,
          name: "Calculator",
          img: Calculator,
          github_link: "https://github.com/ShravanMeena/Calculator",
          live_link: "https://shravanmeena.github.io/Calculator/",
        },
      ],
    };
  }
  render() {
    return (
      <div className={this.props.theme ? "mainWorks" : "mainWorksDark"}>
        <div className='innerWorks'>
          <h4>My Work & Portfolio</h4>
          <p>
            Take a moment to view some of my latest projects. While most of the
            project below were built by me from the ground up.
          </p>
          <div className='cardContainer'>
            {this.state.data.map((item, index) => {
              return (
                <div className='card'>
                  <div class='container'>
                    <img src={item.img} className='image' />
                    <div class='overlay'>
                      <a href={item.live_link} target='_blank'>
                        Live
                      </a>

                      <a href={item.github_link} target='_blank'>
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Button
            style={{ marginTop: 50 }}
            type='primary'
            shape='round'
            size='large'>
            <a
              href='https://github.com/ShravanMeena?tab=repositories'
              target='_blank'>
              See More <RightOutlined />
            </a>
          </Button>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Card, Radio, Button } from "antd";

import { RightOutlined } from "@ant-design/icons";
import "../style/component/_work.scss";
import Monorbit from "../assets/monorbit.png";
import School from "../assets/school.png";
import Calculator from "../assets/calculator.png";
import Instagram from "../assets/instagram.png";
import Airbnb from "../assets/airbnb.png";
import Flipcart from "../assets/flipcart.png";
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
          name: "School",
          img: School,
          github_link: "https://github.com/ShravanMeena/off-canvas-frontend",
          live_link: "https://shravanmeena.github.io/off-canvas-frontend/",
        },
        {
          id: 3,
          name: "Instagram",
          img: Instagram,
          github_link:
            "https://github.com/ShravanMeena/Instagram-clone-frontend",
          live_link: "https://github.com/ShravanMeena/Instagram-clone-frontend",
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
        {
          id: 6,
          name: "Flipcart",
          img: Flipcart,
          github_link: "https://github.com/ShravanMeena/flipcart-clone",
          live_link: "https://github.com/ShravanMeena/flipcart-clone",
        },
      ],
    };
  }
  render() {
    return (
      <div className='mainWorks'>
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

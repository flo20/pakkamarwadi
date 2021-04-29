import React, { Component } from "react";
import { Button } from "antd";

import { RightOutlined } from "@ant-design/icons";
import "../style/component/_work.scss";
import Monorbit from "../assets/examhint.png";
import Ecommerce from "../assets/ecommerce.png";
import Calculator from "../assets/easybook.png";
import Funtube from "../assets/resumemaker.png";
import Airbnb from "../assets/newsapp.png";
import Social from "../assets/plack.png";

export default class Work extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "Examhint",
          img: Monorbit,
          github_link: "https://github.com/ShravanMeena/Examhint",
          live_link: " https://examhint.netlify.app/",
          youtube: "https://youtu.be/N4h27sPQv1E",
        },

        {
          id: 2,
          name: "Ecommerce",
          img: Ecommerce,
          github_link: "https://github.com/ShravanMeena/ecommerce",
          live_link: "https://ecommerce0799.herokuapp.com/",
          youtube: "https://youtu.be/XPAIGeyutEA",
        },
        {
          id: 6,
          name: "Slack",
          img: Social,
          github_link: "https://github.com/ShravanMeena/plack-a-community",
          live_link: "https://slack0799.netlify.app/",
          youtube: "https://youtu.be/Q4NF53fJiFQ",
        },
        {
          id: 3,
          name: "CvMaker",
          img: Funtube,
          github_link: "https://github.com/ShravanMeena/cvmaker",
          live_link: "https://cvmaker0799.netlify.app",
          youtube: "https://youtu.be/2_xt1WpoBgU",
        },
        {
          id: 4,
          name: "NEWS",
          img: Airbnb,
          github_link:
            "https://github.com/ShravanMeena/News-application-with-react-native",
          live_link: "https://youtu.be/lghOv6mlLzs",
          youtube: "https://youtu.be/lghOv6mlLzs",
        },

        {
          id: 5,
          name: "EasyBook",
          img: Calculator,
          github_link:
            "https://github.com/ShravanMeena/EasyHotel-hotel-booking-system",
          live_link: "https://easyhotel0799.netlify.app/",
          youtube: "https://youtu.be/Y8Dj93NPgoM",
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
                    <img src={item.img} className='image' alt='sd' />
                    <div class='overlay'>
                      <a rel='noreferrer' href={item.live_link} target='_blank'>
                        Live
                      </a>

                      <a
                        rel='noreferrer'
                        href={item.github_link}
                        target='_blank'>
                        Github
                      </a>

                      <a rel='noreferrer' href={item.youtube} target='_blank'>
                        youtube
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
              rel='noreferrer'
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

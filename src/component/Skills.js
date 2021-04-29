import React, { Component } from "react";
import "../style/component/_experties.scss";
import { Card, Progress } from "antd";
import { color } from "../constants";
import Mongodb from "../assets/m.jpeg";
import Express from "../assets/e.jpeg";
import ReactJs from "../assets/r.jpeg";
import Node from "../assets/n.jpeg";
import Js from "../assets/js.jpg";
import Rn from "../assets/rn.png";
import Sass from "../assets/sass.png";
import GITHUB from "../assets/github-mark.png";
export default class Experties extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "MongoDB",
          icon: Mongodb,
          percent: "80",
          desc:
            "With lots of unique blocks, you can easily build a page without coding.",
        },

        {
          id: 2,
          name: "Express",
          icon: Express,
          percent: "80",
          desc:
            "With lots of unique blocks, you can easily build a page without coding.",
        },
        {
          id: 3,
          name: "React",
          icon: ReactJs,
          percent: "90",
          desc:
            "With lots of unique blocks, you can easily build a page without coding.",
        },
        {
          id: 4,
          name: "Node",
          icon: Node,
          percent: "80",
          desc:
            "With lots of unique blocks, you can easily build a page without coding.",
        },

        {
          id: 5,
          name: "JAVASCRIPT",
          icon: Js,
          percent: "90",
          desc:
            "With lots of unique blocks, you can easily build a page without coding.",
        },

        {
          id: 6,
          name: "REACT NATIVE",
          icon: Rn,
          percent: "80",
          desc:
            "With lots of unique blocks, you can easily build a page without coding.",
        },

        {
          id: 7,
          name: "SASS",
          icon: Sass,
          percent: "60",
          desc:
            "With lots of unique blocks, you can easily build a page without coding.",
        },
        {
          id: 8,
          name: "GITHUb",
          icon: GITHUB,
          percent: "70",
          desc:
            "With lots of unique blocks, you can easily build a page without coding.",
        },

        // extra
        // {
        //   id: 1,
        //   name: "HTML",
        //             icon: Mongodb
        //   percent: "90",
        //   desc:
        //     "With lots of unique blocks, you can easily build a page without coding.",
        // },

        // {
        //   id: 1,
        //   name: "CSS",
        //             icon: Mongodb
        //   percent: "70",
        //   desc:
        //     "With lots of unique blocks, you can easily build a page without coding.",
        // },

        // {
        //   id: 1,
        //   name: "JQUERY",
        //             icon: Mongodb
        //   percent: "92",
        //   desc:
        //     "With lots of unique blocks, you can easily build a page without coding.",
        // },

        // {
        //   id: 1,
        //   name: "NEXTJS",
        //             icon: Mongodb
        //   percent: "35",
        //   desc:
        //     "With lots of unique blocks, you can easily build a page without coding.",
        // },
      ],
    };
  }
  render() {
    return (
      <div className={this.props.theme ? "mainExperties" : "mainExpertiesDark"}>
        <div className='innerExperties'>
          <h4>Skills & Expertise</h4>
          <p>
            My specialties include quickly learning new skills and programming
            languages, problem-solving, responsive design principles, website
            optimization. So far I have MonngoDb, Express, React, Node,
            javascript and Git/GitHub under my belt.
          </p>

          <div className='cardContainer'>
            {this.state.data.map((item, index) => {
              return (
                <Card className='card'>
                  <div className='cardHeader'>
                    <div style={{ width: 35, height: 35 }}>
                      <img
                        alt='sdad'
                        style={{ width: "100%", height: "100%" }}
                        src={item.icon}
                      />
                    </div>
                    <h4>{item.name}</h4>
                  </div>
                  {/* <div style={{ position: "absolute", top: 0, right: 0 }}>
                    <h4 style={{ background: "red" }}>{item.percent}</h4>
                  </div> */}

                  <Progress
                    percent={item.percent}
                    status='active'
                    strokeColor={this.props.theme ? color : "#0d11179d"}
                  />
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

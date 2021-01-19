import React, { Component } from "react";
import "../style/component/_experties.scss";
import { Card, Progress } from "antd";
import { Html5Outlined, BoldOutlined } from "@ant-design/icons";
import { color } from "../constants";

export default class Experties extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "MongoDB",
          icon: <Html5Outlined style={{ fontSize: 30, color }} />,
          percent: "80",
          desc:
            "With lots of unique blocks, you can easily build a page without coding.",
        },

        {
          id: 2,
          name: "Express",
          icon: <Html5Outlined style={{ fontSize: 30, color }} />,
          percent: "90",
          desc:
            "With lots of unique blocks, you can easily build a page without coding.",
        },
        {
          id: 3,
          name: "React",
          icon: <Html5Outlined style={{ fontSize: 30, color }} />,
          percent: "90",
          desc:
            "With lots of unique blocks, you can easily build a page without coding.",
        },
        {
          id: 4,
          name: "Node",
          icon: <Html5Outlined style={{ fontSize: 30, color }} />,
          percent: "90",
          desc:
            "With lots of unique blocks, you can easily build a page without coding.",
        },

        {
          id: 5,
          name: "JAVASCRIPT",
          icon: <Html5Outlined style={{ fontSize: 30, color }} />,
          percent: "80",
          desc:
            "With lots of unique blocks, you can easily build a page without coding.",
        },

        {
          id: 6,
          name: "REACT NATIVE",
          icon: <Html5Outlined style={{ fontSize: 30, color }} />,
          percent: "90",
          desc:
            "With lots of unique blocks, you can easily build a page without coding.",
        },

        {
          id: 7,
          name: "SASS",
          icon: <Html5Outlined style={{ fontSize: 30, color }} />,
          percent: "70",
          desc:
            "With lots of unique blocks, you can easily build a page without coding.",
        },
        {
          id: 8,
          name: "BOOTSTRAP",
          icon: <BoldOutlined style={{ fontSize: 30, color }} />,

          percent: "90",
          desc:
            "With lots of unique blocks, you can easily build a page without coding.",
        },

        // extra
        // {
        //   id: 1,
        //   name: "HTML",
        //   icon: <Html5Outlined style={{ fontSize: 30, color }} />,
        //   percent: "90",
        //   desc:
        //     "With lots of unique blocks, you can easily build a page without coding.",
        // },

        // {
        //   id: 1,
        //   name: "CSS",
        //   icon: <Html5Outlined style={{ fontSize: 30, color }} />,
        //   percent: "70",
        //   desc:
        //     "With lots of unique blocks, you can easily build a page without coding.",
        // },

        // {
        //   id: 1,
        //   name: "JQUERY",
        //   icon: <Html5Outlined style={{ fontSize: 30, color }} />,
        //   percent: "92",
        //   desc:
        //     "With lots of unique blocks, you can easily build a page without coding.",
        // },

        // {
        //   id: 1,
        //   name: "NEXTJS",
        //   icon: <Html5Outlined style={{ fontSize: 30, color }} />,
        //   percent: "35",
        //   desc:
        //     "With lots of unique blocks, you can easily build a page without coding.",
        // },
      ],
    };
  }
  render() {
    return (
      <div className='mainExperties'>
        <div className='innerExperties'>
          <h4>Work Expertise</h4>
          <p>
            Obviously I'm a Web Designer. Experienced with all stages of the
            development cycle for dynamic web projects.
          </p>

          <div className='cardContainer'>
            {this.state.data.map((item, index) => {
              return (
                <Card className='card'>
                  <div className='cardHeader'>
                    {item.icon}
                    <h4>{item.name}</h4>
                  </div>
                  {/* <div style={{ position: "absolute", top: 0, right: 0 }}>
                    <h4 style={{ background: "red" }}>{item.percent}</h4>
                  </div> */}

                  <Progress percent={item.percent} status='active' />
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "../style/component/_footer.scss";
import {
  // FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  MediumOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import {
  linkedin,
  twitter,
  instagram,
  medium,
  github,
  color,
} from "../constants";

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      writer: "",
      data: [
        {
          id: 1,
          writer: "Chris Pine",
          quote:
            "Programming isn't about what you know; it's about what you can figure out.",
        },
        {
          id: 2,
          writer: "Dennis Ritchie",
          quote:
            "The only way to learn a new programming language is by writing programs in it.",
        },
        {
          id: 3,
          writer: "Andrew Hunt",
          quote:
            "In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.",
        },

        {
          id: 4,
          writer: "Joyce Wheeler",
          quote:
            "Sometimes it's better to leave something alone, to pause, and that's very true of programming",
        },

        {
          id: 5,
          writer: "Burt Rutan",
          quote:
            "Testing leads to failure, and failure leads to understanding.",
        },

        {
          id: 6,
          writer: "Thomas Fuchs",
          quote: "The best error message is the one that never shows up.",
        },
        {
          id: 7,
          writer: "Grace Hopper",
          quote:
            "The most damaging phrase in the language is.. it's always been done this way.",
        },
      ],
    };
  }

  componentDidMount() {
    const quote = this.state.data[
      Math.floor(Math.random() * this.state.data.length)
    ];
    this.setState({
      quote: quote.quote,
      writer: quote.writer,
    });
  }
  render() {
    return (
      <div
        className={
          this.props.theme ? "footerContainer" : "footerContainerDark"
        }>
        <div className='top'>
          <h4 onClick={this.props.home}>
            Pakka<span style={{ color }}>Marwadi</span>
          </h4>
          <p>
            {this.state.quote} -{" "}
            <span style={{ fontSize: 14, color: "gray" }}>
              {this.state.writer}
            </span>
          </p>
          <div className='innerTopFooter'>
            <a href={github} target='_blank'>
              <Button shape='circle' size='large'>
                <GithubOutlined />
              </Button>
            </a>

            <a href={linkedin} target='_blank'>
              <Button shape='circle' size='large'>
                <LinkedinOutlined />
              </Button>
            </a>
            <a href={instagram} target='_blank'>
              <Button shape='circle' size='large'>
                <InstagramOutlined />
              </Button>
            </a>
            {/* <Button shape='circle' size='large'>
              <FacebookOutlined />
            </Button> */}
            <a href={medium} target='_blank'>
              <Button shape='circle' size='large'>
                <MediumOutlined />
              </Button>
            </a>

            <a href={twitter} target='_blank'>
              <Button shape='circle' size='large'>
                <TwitterOutlined />
              </Button>
            </a>
          </div>
        </div>

        <div className='footer'>
          <h4>&#169; 2021 Designed By Shravanmeena</h4>
        </div>
      </div>
    );
  }
}

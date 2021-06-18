import React, { Component } from "react";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import Hero from "../assets/newbg_crop.png";
import "../style/component/_banner.scss";
import { color } from "../constants";
import Typewriter from "typewriter-effect";

export default class Banner extends Component {
  render() {
    return (
      <div className={this.props.theme ? "mainBanner" : "mainBannerDark"}>
        <div className='innerBanner'>
          <div className='left'>
            <div className='innerLeft'>
              {/* <Button className='badge'>
                <Space>
                  <Badge
                    style={{
                      backgroundColor: "merlot",
                      borderColor: "merlot",
                    }}
                    count='hot'
                  />
                </Space>
                <span>Looking for a Developer !</span>
              </Button> */}

              <h4>Hi I'm Shravan Meena</h4>
              <p>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        " I love writing code. I believe in the power of programming to  transform and improve the lives of people around the world."
                      )
                      .callFunction(() => {
                        console.log("String typed out!");
                      })
                      .pauseFor(100)
                      .callFunction(() => {
                        console.log("All strings were deleted");
                      })
                      .start();
                  }}
                />
              </p>
              <div className='btnContainer'>
                <Button
                  onClick={this.props.contact}
                  shape='round'
                  type='primary'
                  style={
                    !this.props.theme
                      ? {
                          backgroundColor: "#1890FF",
                          color: "#ffffff",
                        }
                      : { backgroundColor: color }
                  }
                  size='large'>
                  Hire me
                </Button>
                <Button
                  className='secBtn'
                  style={
                    !this.props.theme
                      ? {
                          backgroundColor: "transparent",
                          borderColor: "#ABACAD",
                          color: "rgba(211, 211, 211, 0.774)",
                        }
                      : {}
                  }
                  shape='round'
                  size='large'>
                  <a
                    rel='noreferrer'
                    href='https://drive.google.com/file/d/1PQKevHilZXOC3Vpru0BwKyjpdhhgtzJS/view?usp=sharing'
                    target='_blank'>
                    Download CV <DownloadOutlined />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className='right'>
            <img alt='hero' src={Hero} />
          </div>
        </div>
      </div>
    );
  }
}

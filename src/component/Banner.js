import React, { Component } from "react";
import { Button, Badge, Space } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import Hero from "../assets/newbg_crop.png";
import "../style/component/_banner.scss";
import { color } from "../constants";

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

              <h4>Here I'am Shravan Meena</h4>
              <p>
                I love writing code. I believe in the power of programming to
                transform and improve the lives of people around the world.
              </p>
              <div className='btnContainer'>
                <Button
                  onClick={this.props.contact}
                  shape='round'
                  type='primary'
                  style={
                    !this.props.theme
                      ? {
                          backgroundColor: "#121212",
                          borderColor: "#121212",
                          color: "rgba(211, 211, 211, 0.774)",
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
                          borderColor: "#1817179d",
                          color: "rgba(211, 211, 211, 0.774)",
                        }
                      : {}
                  }
                  shape='round'
                  size='large'>
                  Download CV <DownloadOutlined />
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

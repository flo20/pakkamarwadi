import React, { Component } from "react";
import { Card, Avatar, Button } from "antd";

import CardBg from "../assets/12.jpg";
import { RightOutlined } from "@ant-design/icons";
import "../style/component/_work.scss";

export default class Work extends Component {
  constructor() {
    super();
    this.state = {
      data: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
    };
  }
  render() {
    return (
      <div className='mainWorks'>
        <div className='innerWorks'>
          <h4>My Work & Portfolio</h4>
          <p>
            Take a moment to view some of our latest work. While most of the
            sites below were built by us from the ground up, we experience a
            wide range of involvement with our client’s websites. We do
            everything from web design, web development, consulting,
            maintenance, graphics, marketing, and everything in between!
          </p>
          <div className='cardContainer'>
            {this.state.data.map((item, index) => {
              return (
                <div className='card'>
                  <div class='container'>
                    <img
                      src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                      className='image'
                    />
                    <div class='overlay'>View on github</div>
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
            See More <RightOutlined />
          </Button>
        </div>
      </div>
    );
  }
}

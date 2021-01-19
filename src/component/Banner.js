import React, { Component } from "react";
import { Button, Badge, Space } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import Hero from "../assets/newbg_crop.png";

import "../style/component/_banner.scss";
export default class Banner extends Component {
  render() {
    return (
      <div className='mainBanner'>
        <div className='innerBanner'>
          <div className='left'>
            <div className='innerLeft'>
              <Button className='badge'>
                <Space>
                  <Badge style={{ backgroundColor: "#52c41a" }} count='hot' />
                </Space>
                <span>Looking for a Developer !</span>
              </Button>

              <h4>Here I'am Shravan Meena</h4>
              <p>
                Obviously I'm a Developer. Developer with over 3 years of
                experience. Experienced with all stages of the development
              </p>
              <div className='btnContainer'>
                <Button shape='round' type='primary' size='large'>
                  Hire me
                </Button>
                <Button style={{ marginLeft: 20 }} shape='round' size='large'>
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

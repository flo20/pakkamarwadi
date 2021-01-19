import React, { Component } from "react";
import "../style/component/_header.scss";
import { color } from "../constants";

import {
  LinkedinOutlined,
  InstagramOutlined,
  GithubOutlined,
  MediumOutlined,
} from "@ant-design/icons";

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='innerHeader'>
          <div className='left'>
            <h4>
              Pakka<span style={{ color }}>Marwadi</span>
            </h4>
          </div>
          <div className='right'>
            <div className='innerRight'>
              <h4>Home</h4>
              <h4>Services</h4>
              <h4>resume</h4>
              <h4>projects</h4>
              <h4>blogs</h4>
              <h4>contact</h4>
            </div>
          </div>
          <div className='end'>
            <GithubOutlined />
            <LinkedinOutlined />
            <MediumOutlined />
          </div>
        </div>
      </div>
    );
  }
}

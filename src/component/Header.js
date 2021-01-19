import React, { Component } from "react";
import "../style/component/_header.scss";
import { color } from "../constants";

import {
  LinkedinOutlined,
  InstagramOutlined,
  GithubOutlined,
  MediumOutlined,
} from "@ant-design/icons";
import { linkedin, medium, github } from "../constants";

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='innerHeader'>
          <div className='left'>
            <h4 onClick={this.props.home} style={{ cursor: "pointer" }}>
              Pakka<span style={{ color }}>Marwadi</span>
            </h4>
          </div>
          <div className='right'>
            <div className='innerRight'>
              <h4 onClick={this.props.home}>Home</h4>
              <h4 onClick={this.props.experties}>Skills</h4>
              <h4 onClick={this.props.project}>projects</h4>
              <h4 onClick={this.props.blog}>blogs</h4>
              <h4 onClick={this.props.contact}>contact</h4>
              <h4>resume</h4>
            </div>
          </div>
          <div className='end'>
            <a href={github} target='_blank'>
              <GithubOutlined />
            </a>
            <a href={linkedin} target='_blank'>
              <LinkedinOutlined />
            </a>
            <a href={medium} target='_blank'>
              <MediumOutlined />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "../style/component/_footer.scss";
import {
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  MediumOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

export default class Footer extends Component {
  render() {
    return (
      <div className='footerContainer'>
        <div className='top'>
          <h4>Shravan meena</h4>
          <p>
            Obviously I'm a Web Designer. Experienced with all stages of the
            development cycle for dynamic web projects.
          </p>
          <div className='innerTopFooter'>
            <Button shape='circle' size='large'>
              <GithubOutlined />
            </Button>

            <Button shape='circle' size='large'>
              <LinkedinOutlined />
            </Button>

            <Button shape='circle' size='large'>
              <InstagramOutlined />
            </Button>

            <Button shape='circle' size='large'>
              <FacebookOutlined />
            </Button>

            <Button shape='circle' size='large'>
              <MediumOutlined />
            </Button>
          </div>
        </div>

        <div className='footer'>
          <h4>&#169; 2021 Designed By Shravanmeena</h4>
        </div>
      </div>
    );
  }
}

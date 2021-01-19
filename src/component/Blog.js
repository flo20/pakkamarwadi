import React, { Component } from "react";
import "../style/component/_blog.scss";
import { Card } from "antd";
import {
  EditOutlined,
  FieldTimeOutlined,
  RightOutlined,
} from "@ant-design/icons";

// import { color } from "../constants";
const { Meta } = Card;

export default class Experties extends Component {
  constructor() {
    super();
    this.state = {
      data: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };
  }
  render() {
    return (
      <div className='mainBlogs'>
        <div className='innerBlog'>
          <h4>Latest News & Blog</h4>
          <p>
            Obviously I'm a Web Designer. Experienced with all stages of the
            development cycle for dynamic web projects.
          </p>

          <div className='cardContainer'>
            {this.state.data.map((item, index) => {
              return (
                <Card
                  cover={
                    <img
                      style={{
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        height: 180,
                        objectFit: "cover",
                      }}
                      alt='example'
                      src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                    />
                  }
                  className='card'>
                  <Meta
                    // avatar={
                    //   <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                    // }
                    title='Card title'
                    description='This is the description'
                  />

                  <div className='footer'>
                    <h4>
                      <FieldTimeOutlined />
                      Dec 12
                    </h4>
                    <h4>
                      Read more <RightOutlined />
                    </h4>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "../style/component/_blog.scss";
import { Card, Alert } from "antd";
import {
  EditOutlined,
  FieldTimeOutlined,
  RightOutlined,
} from "@ant-design/icons";

// import { color } from "../constants";
import Medium1 from "../assets/medium1.png";
import Medium2 from "../assets/medium2.png";
import Medium3 from "../assets/medium3.png";
const { Meta } = Card;

export default class Experties extends Component {
  constructor() {
    super();
    this.state = {
      warning: false,
      data: [
        {
          id: 1,
          title: "10 Best Javascript Projects to Build ...",
          description:
            "Introduction  One of the most popular scripting languages, JavaScript is used in all the web...",
          read: false,
          cover: Medium2,
        },

        {
          id: 2,
          title: "Top 10 React Courses to Learn React..",
          description:
            "React is turning heads worldwide as one of the most popularly used libraries in JavaScript. Engineers...",
          read: false,
          cover: Medium3,
        },

        {
          id: 3,
          title: "Why should you learn Angular?",
          description:
            "What is Angular? Angular is a Javascript framework that is used by developers for building web, desktop ...",
          read: false,
          cover: Medium1,
        },
      ],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        warning: false,
      });
    }, 6000);
  }

  Warn = () => {
    this.setState({
      warning: true,
    });
  };
  render() {
    return (
      <div className={this.props.theme ? "mainBlogs" : "mainBlogsDark"}>
        <div className='innerBlog'>
          <h4>Latest News & Blog</h4>
          {this.state.warning ? (
            <Alert
              message='Warning'
              description='This is a warning notice about coming soon blog.'
              type='warning'
              showIcon
              closable
            />
          ) : null}
          <p>
            {/* Obviously I'm a Web Designer. Experienced with all stages of the
            development cycle for dynamic web projects. */}
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
                        height: 150,
                        objectFit: "cover",
                      }}
                      alt='example'
                      src={item.cover}
                    />
                  }
                  className='card'>
                  <h1>{item.title}</h1>
                  <h6>{item.description}</h6>
                  <div className='footer'>
                    <h4>
                      <FieldTimeOutlined />
                      Dec 12
                    </h4>
                    <h4 onClick={this.Warn}>
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

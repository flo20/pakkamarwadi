import React, { Component } from "react";
import "../style/component/_blog.scss";
import { Card, Alert } from "antd";
import { FieldTimeOutlined, RightOutlined } from "@ant-design/icons";

// import { color } from "../constants";
import Medium1 from "../assets/medium1.png";
import Medium2 from "../assets/medium2.png";
import Medium3 from "../assets/medium3.png";

export default class Experties extends Component {
  constructor() {
    super();
    this.state = {
      warning: false,
      data: [
        {
          id: 1,
          title: "how to upload the image to node ...",
          description:
            "That being said, almost every interactive website today supports file uploads....",
          read: false,
          cover: Medium2,
          link:
            "https://shravanmeena.medium.com/how-to-upload-the-image-to-node-server-using-multer-b4933f95cbfa",
          date: "02 March 2021",
        },

        {
          id: 2,
          title: "Top 10 React Courses to Learn React..",
          description:
            "React is turning heads worldwide as one of the most popularly used libraries in JavaScript. Engineers...",
          read: false,
          cover: Medium3,
          link: "",
          date: "",
        },

        {
          id: 3,
          title: "How Capture a React Native view to...",
          description:
            "In this React Native tutorial, we are going to use react-native-cli in order to build your first React Native...",
          read: false,
          cover: Medium1,
          link:
            "https://shravanmeena.medium.com/react-native-view-shot-2672566d131f",
          date: "10 March 2021",
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
                      {item.date.length > 0 ? (
                        <h4>
                          <FieldTimeOutlined />
                          {item.date}
                        </h4>
                      ) : null}
                    </h4>

                    {item.link.length > 0 ? (
                      <a rel='noreferrer' href={item.link} target='_blank'>
                        <h4>
                          Read more <RightOutlined />
                        </h4>
                      </a>
                    ) : (
                      <span onClick={this.Warn}>
                        Coming soon <RightOutlined />
                      </span>
                    )}
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

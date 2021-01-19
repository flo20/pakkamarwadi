import React, { Component } from "react";
import "../style/component/_contact.scss";
import { Card, Input, Button, Alert } from "antd";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
const { TextArea } = Input;
// import { color } from "../constants";
const { Meta } = Card;

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      warning: false,
      data: [
        {
          id: 1,
          icon: <PhoneOutlined />,
          title: "Phone",
          contact: "9660801827",
          type: "phone",
          description: "Let's have a call",
        },
        {
          id: 2,
          icon: <MailOutlined />,
          title: "Email",
          type: "email",

          contact: "Shravanmeena47@gmail.com",
          description: "Drop me a line",
        },

        {
          id: 3,
          icon: <EnvironmentOutlined />,
          title: "Location",
          type: "location",
          contact: "View on Google map",
          description: "Jaipur, Rajasthan",
        },
      ],
    };
  }

  Warn = () => {
    this.setState({
      warning: true,
    });
  };
  render() {
    return (
      <div className='mainContact'>
        <div className='innerContact'>
          <h4>Contact Me</h4>
          <h5>
            I'm happy to answer any question you have or provide with an
            estimate. Just send me a message in the form below with any
            questions you may have.
          </h5>

          <div className='cardContainer'>
            {this.state.data.map((item, index) => {
              return (
                <Card className='card' key={index}>
                  {item.icon}
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  {item.type == "phone" ? (
                    <h6>
                      <a href={`tel:${item.contact}`}>{item.contact}</a>
                    </h6>
                  ) : null}

                  {item.type == "email" ? (
                    <h6>
                      <a href={`mailto:${item.contact}`}>{item.contact}</a>
                    </h6>
                  ) : null}

                  {item.type == "location" ? (
                    <h6>
                      <a
                        href='https://goo.gl/maps/qU61gDYZby6Jj3LP7'
                        target='_blank'>
                        {item.contact}
                      </a>
                    </h6>
                  ) : null}
                </Card>
              );
            })}
          </div>

          <div className='form'>
            <div className='left'>
              <Input placeholder='First Name' />
              <br />
              <Input placeholder='Your Email' />
              <br />
              <Input placeholder='Your Subject' />
            </div>
            <div className='right'>
              <TextArea rows={7} placeholder='Your Message' />
            </div>
          </div>
          <div className='sendBtn'>
            {this.state.warning ? (
              <Alert
                message='Under Construction'
                description='Send me message on Shravanmeena47@gmail.com'
                type='error'
                showIcon
                closable
              />
            ) : (
              <Button
                onClick={() => this.Warn()}
                type='primary'
                shape='round'
                size='large'>
                Send Message
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

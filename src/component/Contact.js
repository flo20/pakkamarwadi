import React, { Component } from "react";
import "../style/component/_contact.scss";
import { Card, Input, Button } from "antd";
import {
  EditOutlined,
  FieldTimeOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
const { TextArea } = Input;
// import { color } from "../constants";
const { Meta } = Card;

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      data: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };
  }
  render() {
    return (
      <div className='mainContact'>
        <div className='innerContact'>
          <h4>Contact Me</h4>
          <p>
            Obviously I'm a Web Designer. Experienced with all stages of the
            development cycle for dynamic web projects.
          </p>

          <div className='cardContainer'>
            {this.state.data.map((item, index) => {
              return (
                <Card className='card'>
                  <PhoneOutlined />
                  <h4>Card title</h4>
                  <p>
                    Promising development turmoil inclusive education
                    transformative community
                  </p>
                  <h6>152 534-468-854+ </h6>
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
            <Button type='primary' shape='round' size='large'>
              Send Message
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

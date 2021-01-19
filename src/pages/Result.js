import React, { Component } from "react";
import { Result, Button } from "antd";

export default class ResultPage extends Component {
  render() {
    return (
      <div>
        <Result
          status='403'
          title='403'
          subTitle='Sorry, you are not authorized to access this page because this is under maintanance .'
          extra={<Button type='primary'>Support!!</Button>}
        />
      </div>
    );
  }
}

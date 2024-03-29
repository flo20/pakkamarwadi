import React, { Component } from "react";
import { Tabs } from "antd";
import "../style/component/_education.scss";
const { TabPane } = Tabs;

export default class Education extends Component {
  render() {
    return (
      <div className='mainEdu'>
        <div className='innerEdu'>
          <Tabs defaultActiveKey='1'>
            <TabPane tab='Tab 1' key='1'>
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab='Tab 2' key='2'>
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab='Tab 3' key='3'>
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

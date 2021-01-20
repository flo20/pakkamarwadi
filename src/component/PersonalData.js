import React, { Component } from "react";
import "../style/component/_personalData.scss";
export default class PersonalData extends Component {
  render() {
    return (
      <div
        className={
          this.props.theme ? "mainPersonalDetails" : "mainPersonalDetailsDark"
        }>
        <div className='innerPersonalDetails'>
          <div className='left'>
            <h1>Personal Details</h1>

            <div className='details'>
              <h4>
                Email: <span>Shravanmeena47@gmail.com</span>
              </h4>

              <h4>
                Languages: <span>English & Hindi</span>
              </h4>

              <h4>
                Nationality: <span>Indian</span>
              </h4>
            </div>
          </div>
          <div className='right'>
            <h4>
              I Am Full Stack <span>Developer</span> |
            </h4>
            <p>
              I am passionate about development and I love building amazing and
              interactive UI.
              <br /> I keep things simple, clean and efficient.
            </p>
            {/* <h6>Shravanmeena</h6> */}
          </div>
        </div>
      </div>
    );
  }
}

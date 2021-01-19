import React, { Component } from "react";
import "../style/component/_personalData.scss";
export default class PersonalData extends Component {
  render() {
    return (
      <div className='mainPersonalDetails'>
        <div className='innerPersonalDetails'>
          <div className='left'>
            <h1>Personal Details</h1>

            <div className='details'>
              <h4>
                Email: <span>queue@gmail.com</span>
              </h4>

              <h4>
                Languages: <span>English & Hindi</span>
              </h4>

              <h4>
                Nationality: <span>indian</span>
              </h4>
            </div>
          </div>
          <div className='right'>
            <h4>
              I Am Full Stack <span>Developer</span> |
            </h4>
            <p>
              Obviously I'm a Web Designer. Web Developer with over 3 years of
              experience. Experienced with all stages of the development cycle
              for dynamic web projects. The as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <h6>Signature</h6>
          </div>
        </div>
      </div>
    );
  }
}

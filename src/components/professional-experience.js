import React, { Component } from "react";
import Img from "gatsby-image";

export default class ProfessionalExperience extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="work section" id="Work">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Experiência Profissional</h2>
          </div>
          <ul className="work-list">
            
          </ul>
        </div>
      </div>
    );
  }
}

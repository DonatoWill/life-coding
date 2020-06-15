import React, { Component } from "react";
import Img from "gatsby-image";

export default class service extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="service section" id="Service">
        <div className="container">
          <div className="section-head">
            <h2>Conhecimentos</h2>
          </div>
          <div className="row">
            <Img
                fixed={data.jsLogo.childImageSharp.fixed}
                className="customImg"
            />
  
            <Img
                fixed={data.javaLogo.childImageSharp.fixed}
                className="customImg"
            />

            <Img
                fixed={data.springLogo.childImageSharp.fixed}
                className="customImg"
            />
 
            <Img
                fixed={data.oracleLogo.childImageSharp.fixed}
                className="customImg"
            />
  
            <Img
                fixed={data.gitLogo.childImageSharp.fixed}
                className="customImg"
            />

            <Img
                fixed={data.dockerLogo.childImageSharp.fixed}
                className="customImg"
            />
           {/*  {data.edges.map((item, index) => {
              return (
                <div key={index} className="col-md-4 mb-3">
                  <div className="service-main">
                    <h3>{item.node.title}</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.node.description.childMarkdownRemark.html
                      }}
                    />
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    );
  }
}

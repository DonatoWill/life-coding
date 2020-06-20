import React, { Component } from "react";
import Img from "gatsby-image";

export default class work extends Component {
  render() {
    const { data } = this.props;
    const uniqueProjects = Array.from(new Set(data.edges));
    const itens = [];
    return (
      <div className="work section" id="Work">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Projetos</h2>
          </div>
          <ul className="work-list">
            {      
            uniqueProjects.map((item, index) => {
              if(itens.includes(item.node.url)){

              }else{
                itens.push(item.node.url);              
                return (
                  <li key={index} className="item">
                    <div className="inner">
                      <a href={item.node.url} target="_blank">
                        <Img
                          fluid={item.node.image.fluid}
                          objectFit="cover"
                          objectPosition="50% 50%"
                        />
                        <span className="name">{item.node.siteName}</span>
                      </a>
                    </div>
                  </li>
                );
              }
            })
          }
          </ul>
        </div>
      </div>
    );
  }
}

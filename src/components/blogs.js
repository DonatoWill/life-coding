import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import moment from 'moment';

export default class Blogs extends Component {
  render() {
    const { data } = this.props;
    const itens = [];
    return (
      <div className="blogs-section section" id="Blogs">
        <div className="container">
          <div className="section-head">
            <h2>Últimos Posts</h2>
          </div>
          { <ul
            className={`blogs-list ${data.edges.length < 5 ? "few-blogs" : ""}`}
          >
            {data.edges.map((item, index) => {
               if(!itens.includes(item.node.title)){
                itens.push(item.node.title);   
                return (
                  <li key={index} className="item">
                    <div className="inner">
                      <Link className="link" to={item.node.slug} />

                      {item.node.featureImage ? (
                        <Img
                          fluid={item.node.featureImage.fluid}
                          objectFit="cover"
                          objectPosition="50% 50%"
                        />
                      ) : (
                        <div className="no-image"></div>
                      )}
                      <div className="details">
                        <h3 className="title">{item.node.title}</h3>
                        <span className="date">
                          <i className="fas fa-calendar-alt"></i>{" "}
                          {moment(item.node.updatedAt).format("LL")}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              }else{
                return(null);
              }
            })}
          </ul> }
          <div className="see-more">
            <Link to="/blogs">
              <span>Mais Posts</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

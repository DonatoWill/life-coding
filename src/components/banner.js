import React, { Component } from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

export default class Banner extends Component {
  render() {
    const { data } = this.props;
    const charLeft = "{ ";
    const charRight = " }";
    return (
      <div className="banner">
        <Img
          fluid={data.bannerImage.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          shadow= "#192550"
        />
        <div className="container">
          <div className="banner-details">
            
            <div className="typewriter">
    <h1>{charLeft}The Life Coding{charRight}</h1>
            </div>
            <span>Aqui tento passar um pouco do que aprendi e venho aprendendo. <span className="texto-destaque">Seja bem-vindo!</span></span>
            <ul className="sub-data">
              {data.bannerList.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <div className="see-more-dark">
              <Link to="/blogs">
                <span>Ver Blog</span>
              </Link>
            </div>
            <ul className="social">
              <li>
                <a className="fab fa-facebook-f" href={data.facebook} target="_blank" rel="noopener noreferrer"></a>
              </li>
              <li>
                <a
                  className="fab fa-twitter"
                  href={data.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
              <li>
                <a
                  className="fab fa-instagram"
                  href={data.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
              <li>
                <a
                  className="fab fa-linkedin-in"
                  href={data.linkdin}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
              <li>
                <a
                  className="fab fa-github"
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

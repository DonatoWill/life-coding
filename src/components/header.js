import { Link } from "gatsby";
import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
  }

  render() {
    const { data, header } = this.props;
    const { menu } = this.state;
    return (
      
      <header className={`site-header ${menu ? "active" : ""}`}>
        <div className="container">
          <div className="header-main">
            <div className="logo">
              <Link to="/">
                {data.logo.file.url ? (
                  <img src={data.logo.file.url} alt="logo" />
                ) : (
                  <span>{data.siteName}</span>
                )}
              </Link>
            </div>
            <div
              className="responsive-menu"
              onClick={() => {
                this.setState({
                  menu: !menu
                });
              }}
            >
              <span></span>
            </div>
            
              <div className="menu">
                <ul
                  onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}
                >
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to={`/blogs`}>Blog</Link>
                  </li>         
                  <li>
                    <Link to={`/about`}>Sobre</Link>
                  </li>
                 
                  <li>
                    <Link to={`/portfolio`}>Portfólio</Link>
                  </li>

                  <li>
                    <Link to={`/#Contact`}>Contato</Link>
                  </li>
                  
                </ul>
              </div>            
          </div>
        </div>
      </header>
    );
  }
}

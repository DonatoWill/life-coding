import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";
import moment from 'moment';
import { Link } from "gatsby";
import { render } from 'react-dom';

export default class Blogs extends Component {

  constructor(props) {
    super();
    this.updateFilterPost = this.updateFilterPost.bind(this);
    this.filterPost = ""
    this.state = {
      posts: []
    }
    this.data = props.data;
    this.itens = []
  }

  componentDidMount(){
    this.setState({
      posts: this.data.allContentfulBlogs.edges
    })
  }

  updateFilterPost = event =>{
    let byArea = event.target.getAttribute("value")
    if(byArea == null){
      byArea = event.target.value
    }
    if(byArea == ""){
      this.setState({
        posts: this.data.allContentfulBlogs.edges
      })
    }else{
      this.setState({
        posts: this.data.allContentfulBlogs.edges.filter(edge =>
          (edge.node.category == byArea)
        )
      })
    }
    this.itens = []
    
  }

  render() {
    const renderPosts = this.state.posts.map((item, index) => {
      if(!this.itens.includes(item.node.title)){
        this.itens.push(item.node.title);   
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
      }
    })


    return (
      <Layout>
      <SEO
        title="Posts"
        keywords={[`Developer`, `Web`, `Software`, 'Coding', 'The Life Coding', 'Programação']}
      />
        <div className="site-container blogs-page" id="BlogsPage">
          <div className="filter-post-area">
              <ul>                
              <div className="filter-option" value="" onClick={this.updateFilterPost}>TODOS</div>
                <div className="filter-option" value="carreira" onClick={this.updateFilterPost}>CARREIRA</div>
                <div className="filter-option" value="algoritmo" onClick={this.updateFilterPost}>ALGORITMOS E ESTRUTURAS DE DADOS</div>
                <div className="filter-option" value="coding" onClick={this.updateFilterPost}>CÓDIGOS / HANDS ON</div>
                <div className="filter-option" value="qualidade" onClick={this.updateFilterPost}>QUALIDADE DE SOFTWARE</div>
                <div className="filter-option" value="conceitos" onClick={this.updateFilterPost}>CONCEITOS DE PROGRAMAÇÃO</div>
              </ul>
          </div>
          <div className="container">

           { <ul
              className={`blogs-list ${
                this.data.allContentfulBlogs.edges.length < 5 ? "few-blogs" : ""
              }`}
            >     
            <div className="filter-post-area-select">
              <select className="form-control select-area-post" onChange={this.updateFilterPost}>                
                <option value="" onClick={this.updateFilterPost}>TODOS</option>
                <option value="carreira" onClick={this.updateFilterPost}>CARREIRA</option>
                <option value="algoritmo" onClick={this.updateFilterPost}>ALGORITMOS E ESTRUTURAS DE DADOS</option>
                <option value="coding" onClick={this.updateFilterPost}>CÓDIGOS / HANDS ON</option>
                <option value="qualidade" onClick={this.updateFilterPost}>QUALIDADE DE SOFTWARE</option>
                <option value="conceitos" onClick={this.updateFilterPost}>CONCEITOS DE PROGRAMAÇÃO</option>
              </select>
          </div>  
            {renderPosts}
            </ul> }
          </div>
        </div>
      </Layout>
    );
  }
}

//render(<Blogs />, document.getElementsByClassName("root"));
export const pageQuery = graphql`
  query BlogsQuery {
    allContentfulBlogs(sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
          title
          slug
          featureImage {
            fluid(maxWidth: 1500) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          createdAt
          updatedAt
          category
        }
      }
    }
  }
`;

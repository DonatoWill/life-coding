import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Service from "../components/service";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Work from "../components/work";
import ProfessionalExp from "../components/professional-experience";

export default class Portfolio extends Component {

    render() {
        const { data } = this.props;
        return (
            <Layout>
                <SEO
                    title="About"
                    keywords={[`Donato William`, `Backend Developer`, `Developer`, `Blogs`]}
                />
                <div className="site-container blogs-page" id="Blogs">
                    <div className="container">

                        <Service data={data}></Service>
                    
                        <Work data={data.allContentfulWorks}></Work>

                        <ProfessionalExp data={data.allContentfulWorks}></ProfessionalExp>
                    </div>
                </div>
            </Layout>
      );
    }
  }

export const pageQuery = graphql`
query PortfolioQuery {
  allContentfulService {
    edges {
      node {
        title
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
  allContentfulWorks {
    edges {
      node {
        siteName
        url
        image {
          fluid(maxWidth: 600) {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
    }
  }
  jsLogo: file(relativePath: { eq: "js-logo.png" }) {
    childImageSharp {
      fixed(width: 150, height: 150) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  javaLogo: file(relativePath: { eq: "java-logo.jpg" }) {
    childImageSharp {
      fixed(width: 150, height: 150) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  springLogo: file(relativePath: { eq: "spring-logo.jpg" }) {
    childImageSharp {
      fixed(width: 150, height: 150) {
        ...GatsbyImageSharpFixed
      }
    }
  }

  gitLogo: file(relativePath: { eq: "git-logo.jpg" }) {
    childImageSharp {
      fixed(width: 150, height: 150) {
        ...GatsbyImageSharpFixed
      }
    }
  }

  dockerLogo: file(relativePath: { eq: "docker-logo.png" }) {
    childImageSharp {
      fixed(width: 150, height: 150) {
        ...GatsbyImageSharpFixed
      }
    }
  }

  oracleLogo: file(relativePath: { eq: "oracle-logo.png" }) {
    childImageSharp {
      fixed(width: 150, height: 150) {
        ...GatsbyImageSharpFixed
      }
    }
  }

}
`;
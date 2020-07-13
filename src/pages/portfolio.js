import React, { Component } from "react";
import { graphql } from "gatsby";
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
                  title="Portfólio"
                  keywords={[`Developer`, `Web`, `Software`, 'Coding', 'The Life Coding', 'Programação']}
                />
                <div className="site-container blogs-page" id="Blogs">
                    <div className="container">
                        <Service data={data}></Service>
                        <ProfessionalExp data={data.allContentfulWorks}></ProfessionalExp>
                        <Work data={data.allContentfulWorks}></Work>    

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
      fixed(width: 100, height: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  javaLogo: file(relativePath: { eq: "java-logo.jpg" }) {
    childImageSharp {
      fixed(width: 100, height: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  springLogo: file(relativePath: { eq: "spring-logo.png" }) {
    childImageSharp {
      fixed(width: 100, height: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  gitLogo: file(relativePath: { eq: "git-logo.png" }) {
    childImageSharp {
      fixed(width: 100, height: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  dockerLogo: file(relativePath: { eq: "docker-logo.png" }) {
    childImageSharp {
      fixed(width: 100, height: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  oracleLogo: file(relativePath: { eq: "oracle-logo.jpg" }) {
    childImageSharp {
      fixed(width: 100, height: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  angularLogo: file(relativePath: { eq: "angular-logo.png" }) {
    childImageSharp {
      fixed(width: 100, height: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  hibernateLogo: file(relativePath: { eq: "hibernate-logo.png" }) {
    childImageSharp {
      fixed(width: 100, height: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`;
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/banner";
import Blogs from "../components/blogs";
import Contact from "../components/contact";

const title = "{ The Life Coding }";
const IndexPage = ({ data }) => (
  
  <Layout header="home" id="root">
    <SEO
      title={title}
      keywords={[`Developer`, `Web`, `Software`, 'Coding', 'The Life Coding', 'Programação']}
    />
    <Banner data={data.contentfulAboutMe}></Banner>

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Blogs")
      .map(t => {
        return <Blogs data={data.allContentfulBlogs}></Blogs>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Contact")
      .map(t => {
        return <Contact data={data.contentfulAboutMe.gmail}></Contact>;
      })}
  </Layout>
  
);

export default IndexPage;

export const pageQuery = graphql`
  query AboutQuery {
    contentfulAboutMe {
      name
      photo {
        file {
          url
        }
        fluid {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      designation
      age
      facebook
      github
      gmail
      id
      instagram
      linkdin
      twitter
      location
      description {
        childMarkdownRemark {
          html
        }
      }
      bannerImage {
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
      bannerList
    }
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
    allContentfulBlogs(limit: 10, sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
          title
          slug
          featureImage {
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
          createdAt
          updatedAt
          category
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
    contentfulPhotos {
      photos {
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
    contentfulSiteInformation {
      menus
    }
  }
`;

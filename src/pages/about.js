import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Service from "../components/service";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Work from "../components/work";

export default class About extends Component {

    render() {
      const { data } = this.props;
      return (
        <Layout>
          <SEO
            title="About"
            keywords={[`Donato William`, `Backend Developer`, `Developer`, `Blogs`]}
          />
          <div className="site-container about-page" id="About">
          <div className="container">
      <div className="about-main row">
        <div className="left col-md-5 col-lg-4 mb-3">
          <Img
            fixed={data.contentfulAboutMe.photo.fluid}
            objectFit="cover"
            objectPosition="top center"
          />
        </div>
        <div className="left col-md-7 col-lg-8">
          <div className="about-details">
            <span className="name">Meu nome é {data.contentfulAboutMe.name}.</span>
            <h2 className="sub-position">
            Software Developer.
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.contentfulAboutMe.description.childMarkdownRemark.html
              }}
            />
            <ul className="details">
              <li>
                <strong>Nome Completo</strong>
                <p>{data.contentfulAboutMe.name}</p>
              </li>
              <li>
                <strong>Idade</strong>
                <p>{data.contentfulAboutMe.age} Anos</p>
              </li>
              <li>
                <strong>Localização</strong>
                <p>{data.contentfulAboutMe.location}</p>
              </li>
              <li>
                <strong>Email</strong>
                <p>
                  <a href={`mailto:${data.contentfulAboutMe.gmail}`}>{data.contentfulAboutMe.gmail}</a>
                </p>
              </li>
            </ul>
            <div className="socials">
              <ul>
                <li>
                  <a
                    className="fab fa-facebook-f"
                    href={data.contentfulAboutMe.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fab fa-twitter"
                    href={data.contentfulAboutMe.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fab fa-instagram"
                    href={data.contentfulAboutMe.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fab fa-linkedin-in"
                    href={data.contentfulAboutMe.linkdin}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fab fa-github"
                    href={data.contentfulAboutMe.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
          </div>

    </Layout>
      );
    }
  }

export const pageQuery = graphql`
query PageAboutQuery {
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
}
`;
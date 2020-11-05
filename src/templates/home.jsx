import React from "react";
import { Helmet } from "react-helmet";
// import { graphql } from "gatsby";
import Layout from "../layout";
import HomePage from "../components/HomePage/HomePage";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Home extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        {/* <div className="landing-container0"> */}
        {/* <div className="posts-container0"> */}
        <Helmet title={config.siteTitle} />
        <SEO />
        <HomePage />
        {/* Helloooo */}
        {/* <PostListing postEdges={postEdges} /> */}
        {/* </div> */}
        {/* // </div> */}
      </Layout>
    );
  }
}

export default Home;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query HomeQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;

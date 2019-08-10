import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import OnVisible from "react-on-visible";

const BlogPosts = () => {
  const data = useStaticQuery(graphql`
    query BlogPostsQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 100
        filter: { fileAbsolutePath: { regex: "/(/blog)/gm" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              subtitle
              date(formatString: "DD. MMM YYYY")
              path
              description
              tags
            }
          }
        }
      }
    }
  `);

  const blogPosts = data.allMarkdownRemark.edges.map(edge => edge.node);

  return blogPosts.map(post => (
    <React.Fragment key={post.frontmatter.title}>
      <OnVisible
        percent={65}
        className="column is-half invisble"
        visibleClassName="visible animated slideInLeft"
        wrappingElement="div"
      >
        <div className="tile is-vertical is-parent">
          <div className="tile is-child box">
            <h1 className="title">
              {post.frontmatter.title}{" "}
              <span className="tag is-info">{post.frontmatter.date}</span>
            </h1>
            <h2 className="subtitle">{post.frontmatter.subtitle}</h2>
            <div className="tags">
              {post.frontmatter.tags.map(tag => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <hr />

            {post.frontmatter.description}
          </div>
        </div>
      </OnVisible>
    </React.Fragment>
  ));
};

export default BlogPosts;

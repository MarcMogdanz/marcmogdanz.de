import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import OnVisible from "react-on-visible";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 100
        filter: { fileAbsolutePath: { regex: "/(/project/)/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              subtitle
              date(formatString: "YYYY")
              tags
              active
            }
            html
          }
        }
      }
    }
  `);

  const projects = data.allMarkdownRemark.edges.map(edge => edge.node);

  if (projects.length === 0) {
    return (
      <div className="column is-full">
        <div className="tile is-vertical is-parent">
          <div className="tile is-child box">
            <h1 className="title has-text-centered">
              Nothing here yet{" "}
              <FontAwesomeIcon
                icon={faHeartBroken}
                className="icon is-medium"
                style={{ color: "grey-dark" }}
              />
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return projects.map((project, index) => (
    <React.Fragment key={project.frontmatter.title}>
      <OnVisible
        percent={65}
        className="column is-half invisble"
        // based on project index let card slide in from left or right
        visibleClassName={`visible animated ${
          index % 2 ? "slideInRight" : "slideInLeft"
        }`}
        wrappingElement="div"
      >
        <div className="tile is-vertical is-parent">
          <div className="tile is-child box">
            <h1 className="title">
              {project.frontmatter.title}{" "}
              {project.frontmatter.active && (
                <span className="tag is-success">Work in Progress</span>
              )}
            </h1>
            <h2 className="subtitle">{project.frontmatter.subtitle}</h2>
            <div className="tags">
              <span className="tag is-link">{project.frontmatter.date}</span>
              {!project.frontmatter.active && (
                <span className="tag is-warning">Finished</span>
              )}
              {project.frontmatter.tags.map(tag => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <hr />

            {/* eslint-disable-next-line */}
            <div dangerouslySetInnerHTML={{ __html: project.html }} />
          </div>
        </div>
      </OnVisible>
    </React.Fragment>
  ));
};

export default Projects;

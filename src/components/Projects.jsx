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

  return projects.map(project => (
    <React.Fragment key={project.frontmatter.title}>
      <OnVisible
        percent={65}
        className="column is-half invisble"
        visibleClassName="visible animated slideInLeft"
        wrappingElement="div"
      >
        <div className="tile is-vertical is-parent">
          <div className="tile is-child box">
            <h1 className="title">
              {project.frontmatter.title}{" "}
              <span className="tag is-info">{project.frontmatter.date}</span>
            </h1>
            <h2 className="subtitle">{project.frontmatter.subtitle}</h2>
            <div className="tags">
              {project.frontmatter.tags.map(tag => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <hr />

            <div dangerouslySetInnerHTML={{ __html: project.html }} />
          </div>
        </div>
      </OnVisible>
    </React.Fragment>
  ));
};

export default Projects;

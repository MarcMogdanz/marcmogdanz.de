import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import OnVisible from "react-on-visible";

interface Project {
  frontmatter: {
    title: string;
    subtitle: string;
    active: boolean;
    date: string;
    tags: string[];
  };
  html: string;
}

const Projects = (): JSX.Element => {
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

  const projects: Project[] = data.allMarkdownRemark.edges.map(
    (edge: { node: Project }) => edge.node
  );

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

  const jsxProjects = projects.map((project: Project, index: number) => (
    <React.Fragment key={project.frontmatter.title}>
      <OnVisible
        percent={65}
        className="column is-half invisble"
        // based on project index let card slide in from left or right
        visibleClassName={`visible animated ${
          index % 2 ? "slideInRight" : "slideInLeft"
        }`}
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
              {project.frontmatter.tags.map((tag) => (
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

  return <>{jsxProjects}</>;
};

export default Projects;

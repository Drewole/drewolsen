import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Project from "./Project"

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            type
            tags
            slug
            name
            id
            hasSite
            description
            squareImg {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            frontImg {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const projects = data.allProjectsJson.edges
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Some of My Work.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects.map(({ node: project }) => {
              const title = project.name
              const description = project.description
              const tags = project.tags
              const type = project.type
              const slug = project.slug
              const imgSquare = project.squareImg.childImageSharp.fluid
              console.log(imgSquare)

              return (
                <Project
                  title={title}
                  description={description}
                  tags={tags}
                  type={type}
                  slug={slug}
                  squareImg={imgSquare}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects

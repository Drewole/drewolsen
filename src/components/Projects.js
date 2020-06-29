import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ProjectPreview from "./ProjectPreview"

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
            images {
              frontPage {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              square {
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
    }
  `)
  const projects = data.allProjectsJson.edges
  {
    projects.map(({ node: project }) => {
      const title = project.name
      const slug = project.slug
      const type = project.type
      const description = project.description
      const tags = project.tags
      const squareImg = project.image.square.childImageSharp.fluid
      const frontImg = project.frontPage.square.childImageSharp.fluid
    })
  }
}

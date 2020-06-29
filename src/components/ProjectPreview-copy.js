import React from "react"
import { Link } from "gatsby"
import { FaPlus, FaTag } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Coffee from "../images/portfolio/mnapt-square.jpg"

const ProjectPreview = () => {
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
              insidePage {
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
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}
export default ProjectPreview

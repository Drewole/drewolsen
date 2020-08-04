import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"

const ProfilePic = () => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: { eq: "profilepic.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={query => {
      // Set ImageData.
      const imageData = query.file.childImageSharp.fluid
      return <Image src={imageData} alt="Illustration of Drew Olsen" />
    }}
  />
)

export default ProfilePic

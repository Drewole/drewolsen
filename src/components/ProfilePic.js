import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const ProfilePic = () => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: { eq: "drewPic.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      //Lets get the data
      const imageData = data.file.childImageSharp.fluid

      return (
        <Image
          className="profile-pic"
          fluid={imageData}
          alt="Illustration of drew"
        />
      )
    }}
  />
)

export default ProfilePic

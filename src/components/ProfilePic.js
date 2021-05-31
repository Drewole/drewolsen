import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function ProfilePic() {

  return <StaticImage
    className="profile-pic"
    src="../images/drewPic.jpg"
    alt="Illustration of Drew Olsen"
  />

}

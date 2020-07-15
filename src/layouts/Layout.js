import React from "react"
import Helmet from "react-helmet"
import { siteMetadata } from "../../gatsby-config"
import Favicon from "../images/favicon.png"
import "../scss/main.scss"

const Layout = ({ children }) => (
  <React.Fragment>
    <Helmet>
      <meta name="author" description={siteMetadata.author} />
      <title>{siteMetadata.title}</title>
      <link rel="icon" href={Favicon} type="image/x-icon" />
    </Helmet>
    {children}
  </React.Fragment>
)

export default Layout

import React from "react"
import "../scss/main.scss"
import Helmet from "react-helmet"
import { siteMetadata } from "../../gatsby-config"
import Favicon from "../images/favicon.png"
import FastClick from "fastclick"

if (typeof window !== "undefined") {
  FastClick.attach(document.body)
}

const Layout = ({ children }) => (
  <React.Fragment>
    <Helmet>
      <meta name={siteMetadata.author} description={siteMetadata.description} />
      <title>{siteMetadata.title}</title>
      <description></description>
      <link rel="icon" href={Favicon} type="image/x-icon" />
    </Helmet>

    {children}
  </React.Fragment>
)

export default Layout

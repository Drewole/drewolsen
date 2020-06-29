import React from "react"
import Helmet from "react-helmet"
import { siteMetadata } from "../../gatsby-config"
import "../scss/main.scss"
import "../js/main.js"

const TemplateWrapper = ({ children }) => (
  <React.Fragment>
    <Helmet>
      <meta name="author" description={siteMetadata.author} />
      <title>{siteMetadata.title}</title>
      <link rel="icon" href="../images/favicon.png" type="image/x-icon" />
    </Helmet>
    {children}
  </React.Fragment>
)

export default TemplateWrapper

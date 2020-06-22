import React from "react"
import Helmet from "react-helmet"
import { siteMetadata } from "../../gatsby-config"

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="author" description={siteMetadata.author} />
      <title>{siteMetadata.title}</title>
      <link rel="icon" href="../assets/favicon.png" type="image/x-icon" />
    </Helmet>
    {children()}
  </div>
)

export default TemplateWrapper

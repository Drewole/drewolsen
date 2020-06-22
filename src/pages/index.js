import React from "react"
import { Link } from "gatsby"

import "../scss/main.scss"
import "../js/main.js"

import Header from "../components/Header"
import About from "../components/About"
// import Resume from '../components/Resume';
import Portfolio from "../components/Portfolio"
// import Testimonials from '../components/Testimonials';
import Footer from "../components/Footer"

import Image from "../components/image"
import { siteMetadata } from "../../gatsby-config"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage

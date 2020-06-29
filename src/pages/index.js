import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/Header"
import About from "../components/About"
// import Resume from '../components/Resume';
import Portfolio from "../components/Portfolio"
// import Testimonials from '../components/Testimonials';
import Footer from "../components/Footer"
import TemplateWrapper from "../layouts/TemplateWrapper"
import Projects from "../components/Projects"

const IndexPage = () => {
  return (
    <TemplateWrapper>
      <Header />
      <About />
      {/* <Resume /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Footer />
    </TemplateWrapper>
  )
}

export default IndexPage

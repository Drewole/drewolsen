import React from "react"

import Layout from "../layouts/Layout"
import Header from "../components/Header"
import About from "../components/About"
import Portfolio from "../components/Portfolio"
import Projects from "../components/Projects"
import Footer from "../components/Footer"
// import Resume from '../components/Resume';
// import Testimonials from '../components/Testimonials';

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <About />
      {/* <Resume /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Projects />
      <Footer />
    </Layout>
  )
}

export default IndexPage

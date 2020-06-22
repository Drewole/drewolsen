import React from "react"
import { FaCloudDownload, FaPhone, FaEnvelope } from "react-icons/fa"

import profilePic from "../images/profilepic.jpg"
const montserratLink =
  "https://www.google.com/search?q=montserrat+font&oq=montserrat+font&aqs=chrome..69i57j0l6j69i60.3171j0j1&sourceid=chrome&ie=UTF-8"

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p className="large">
          I am a Front-End Web Developer with around ten years of experience.
          Some might consider me a Designer that can Code. I have an eye for
          design but also understand, can implement and explain the technical
          side of Front End Website Development. My foray into Responsive
          websites started eight years ago and I have continued striving to be
          on the cutting edge of the new technologies/methodologies emerging
          ever since. I strive to always improve the quality of work I can
          provide my clients and ensure I am using the most appropriate
          technology for their project. Oh, and I have an unhealthy fondness for{" "}
          <a target="_blank" href={montserratLink}>
            Montserrat.
          </a>
        </p>

        <h3>My skills include but are not limited to:</h3>
        <p>
          HTML5, SCSS, React, Gatsby, Gulp, Responsive Design, Webpack, Sketch,
          Figma, Adobe Suite, Docker, Netlify, Git, PHP and
          Wordpress(From-scratch themes and plugins).
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <h4>Drew Olsen</h4>
            <p className="address">
              <span>
                11432 Zion Cir
                <br /> Bloomington, MN 55437
              </span>
            </p>
            <p className="contact-info">
              <a href="tel:952.381.5559">
                <FaPhone /> 952.381.5559
              </a>
              <a
                className="form-link"
                target="_blank"
                href="https://forms.gle/s9VwLkV3KA4xjcmk6"
              >
                <FaEnvelope /> Contact Me
              </a>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a
                target="_blank"
                href="/downloads/DrewOlsenResume.pdf"
                className="button"
              >
                {" "}
                <FaCloudDownload /> Download Resume{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About

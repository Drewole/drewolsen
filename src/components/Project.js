import React from "react"
import { FaPlus, FaTag, FaTimes } from "react-icons/fa"
import Image from "gatsby-image"

const Project = ({
  squareImg,
  description,
  frontImg,
  hasSite,
  title,
  slug,
  tags,
  type,
}) => (
  <div className="project">
    <div className="columns portfolio-item">
      <div className="item-wrap">
        <a href={`#modal-${slug}`}>
          <Image fluid={squareImg} alt={title} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{title}</h5>
              <p>{type}</p>
            </div>
          </div>
          <div className="link-icon">
            <FaPlus />
          </div>
        </a>
      </div>
    </div>

    <div className="popup-modal-shadow">
      <div id={`modal-${slug}`} className="popup-modal mfp-hide">
        <Image fluid={frontImg} alt={title} />
        <div className="description-box">
          <h4>{title}</h4>
          <p>{description}</p>
          <span className="categories">
            <FaTag /> <span>{tags}</span>
          </span>
        </div>

        <div className="link-box">
          {hasSite === "true" && (
            <a href={`https://projects.drewolsen.design/${slug}`}>View Site</a>
          )}

          <a href="#portfolio" className="popup-modal-dismiss">
            Close
          </a>
        </div>
        <a href="#portfolio" className="popup-modal-close">
          <FaTimes />
        </a>
      </div>
    </div>
  </div>
)

export default Project

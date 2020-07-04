import React from "react"
import { FaPlus, FaTag, FaTimes } from "react-icons/fa"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Project = ({
  imgSquare,
  description,
  frontImg,
  title,
  slug,
  tags,
  type,
}) => (
  <div className="project">
    <div className="columns portfolio-item">
      <div className="item-wrap">
        <a href="#modal-01">
          <Image fluid={imgSquare} alt={title} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{title}</h5>
              <Link to={`/projects/${slug}`}>
                <p>{type}</p>
              </Link>
            </div>
          </div>
          <div className="link-icon">
            <FaPlus />
          </div>
        </a>
      </div>
    </div>
    <div id="modal-01" className="popup-modal mfp-hide">
      <div className="description-box">
        <h4>{title}</h4>
        <p>{description}</p>
        <span className="categories">
          <FaTag /> {tags}
        </span>
      </div>

      <div className="link-box">
        <a href={`./projects/${slug}`}>View Site</a>
        <a href="#portfolio" className="popup-modal-dismiss">
          Close
        </a>
      </div>
      <a href="#portfolio" className="popup-modal-close">
        <FaTimes />
      </a>
    </div>
  </div>
)

export default Project

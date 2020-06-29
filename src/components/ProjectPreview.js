import React from "react"
import Link from "gatsby"

import { FaPlus, FaTag } from "react-icons/fa"
import Image from "gatsby-image"

const ProjectPreview = ({ imageData, title, description, tags, type }) => {
  return (
    <React.Fragment>
      <div className="columns portfolio-item">
        <div className="item-wrap">
          <a href="#modal-01" title="">
            <Image fluid={imageData} alt={title} />
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
      <div id="modal-01" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src={imageData} alt="" />

        <div className="description-box">
          <h4>{title}</h4>
          <p>{description}</p>
          <span className="categories">
            <FaTag /> {tags}
          </span>
        </div>

        <div className="link-box">
          <a href="./projects">Details</a>
          <a href="#portfolio" className="popup-modal-dismiss">
            Close
          </a>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ProjectPreview

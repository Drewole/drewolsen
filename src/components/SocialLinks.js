import React from "react"
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a rel="noopener" href="https://twitter.com/drewole">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a rel="noopener" href="https://instagram.com/drewole">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a rel="noopener" href="https://github.com/drewole">
        <FaGithub />
      </a>
    </li>
  </ul>
)

export default SocialLinks

import React from "react"
import { FaGithub } from "react-icons/fa"
import { TiSocialInstagram, TiSocialTwitter } from "react-icons/ti"
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a className="twitter" rel="noopener" href="https://twitter.com/drewole">
        <TiSocialTwitter />
      </a>
    </li>
    <li>
      <a
        className="instagram"
        rel="noopener"
        href="https://instagram.com/drewole"
      >
        <TiSocialInstagram />
      </a>
    </li>
    <li>
      <a className="github" rel="noopener" href="https://github.com/drewole">
        <FaGithub />
      </a>
    </li>
  </ul>
)

export default SocialLinks

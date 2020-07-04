import React from "react"

import Navigation from "./Navigation"
import Banner from "./Banner"
import ScrollDown from "./ScrollDown"

const Header = () => {
  //Adds the background to the navigation bar on scroll
  window.addEventListener("scroll", addNavBkg)

  function addNavBkg(ev) {
    const navBar = document.getElementById("nav-wrap")
    let windowWidth = window.innerWidth
    let scrollFromTop = window.scrollY
    if (windowWidth >= 768 && scrollFromTop >= 130) {
      navBar.classList.add("scroll")
    } else {
      if (navBar.classList.contains("scroll")) {
        navBar.classList.remove("scroll")
      }
    }
  }
  return (
    <header id="home">
      <Navigation />
      <Banner />
      <ScrollDown />
    </header>
  )
}

export default Header

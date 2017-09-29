import React from 'react'

const Header = () => {
  return(
    <header className="Header" id="particles-js">
      <div className="banner--content">
        <h1>
          <span className="banner--title">Daniel Sperry</span>
          <span className="banner--description">Remote Web Developer</span>
        </h1>
        <div className="banner--nav_links">
          <a className="banner--nav_link" href="#chatApp" data-scroll>About Me</a>
        </div>
      </div>
      <a className="down banner--down_arrow" href="#chatApp" data-scroll>
        <i className="icon fa fa-chevron-down" aria-hidden="true"></i>
      </a>
    </header>
  )
}

export default Header

import React from 'react'
import Particles from 'react-particles-js';

import params from './particle_params'

const Header = () => {
  return(
    <header className="Header" id="particles-js">
      <Particles params={params} />
      <div className="banner--content">
        <h1>
          <span className="banner--title">Daniel Sperry</span>
          <span className="banner--description">Remote Web Developer</span>
        </h1>
        <div className="banner--nav_links">
          <a className="banner--nav_link" href="#chatApp" data-scroll>Let's chat!</a>
          <a className="banner--nav_link" download="resume-daniel_sperry.pdf" href="http://dsperry.com/resume.pdf">Download his resumé</a>
        </div>
      </div>
      <a className="down banner--down_arrow" href="#chatApp" data-scroll>
        <i className="icon fa fa-chevron-down" aria-hidden="true"></i>
      </a>
    </header>
  )
}

export default Header

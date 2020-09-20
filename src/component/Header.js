import React from "react";

function Header (){
    return(
        <section id="header">
        <div class="header container">
          <div class="nav-bar">
            <div class="brand">
              <a href="#hero"><h1><span>R</span>ufaida <span>J</span>umaa</h1></a>
            </div>
            <div class="nav-list">
              <div class="hamburger"><div class="bar"></div></div>
              <ul>
                <li><a href="#start" data-after="Home">Home</a></li>
                <li><a href="#services" data-after="Skills">Skills</a></li>
                <li><a href="#about" data-after="Education">Education</a></li>
                <li><a href="#projects" data-after="Projects">Projects</a></li>
                <li><a href="#contact" data-after="Contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Header;
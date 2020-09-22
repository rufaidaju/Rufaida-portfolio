import React,{Component} from "react";

class Header extends Component{
    constructor(){
        super();
        this.state={}
    }
    
    handleClick(){
        const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
        const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
        
        hamburger.addEventListener('click', () => {
	    hamburger.classList.toggle('active');
	    mobile_menu.classList.toggle('active');
        }); 
        
        return
    }

    render(){
        return(
          <section id="header">
            <div className="header container">
              <div className="nav-bar">
                <div className="brand">
                  <a href="#hero"><h1><span>R</span>ufaida <span>J</span>umaa</h1></a>
                </div>
                <div className="nav-list">
                  <button className="hamburger" onClick={this.handleClick}><div className="bar"></div></button>
                  <ul>
                    <li><a href="#start" data-after="Home">Home</a></li>
                    <li><a href="#skills" data-after="Skills">Skills</a></li>
                    <li><a href="#education" data-after="Education">Education</a></li>
                    <li><a href="#projects" data-after="Projects">Projects</a></li>
                    <li><a href="#footer" data-after="Contact">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )
    } 
}
export default Header;
import React from "react";



function Footer(){
return(
    <section id="footer">
  <div className="footer  container">
    <div className="brand"><p><span>R</span>ufaida <span>J</span>umaa</p></div>
    <p>Contact me on:</p>
    <div className="social-icon">
      <div className="social-item">
        <a href="tel:+4520710141">
            <img src="https://img.icons8.com/bubbles/50/000000/phone.png" alt="Phone icon"/>
            <span>20710141</span>
        </a>
      </div>
      <div className="social-item">
        <a href="sms:+4520710141">
        <img src="https://img.icons8.com/bubbles/50/000000/sent.png" alt="SMS icon"/>
            <span>Message</span>
        </a>
      </div>
      <div className="social-item">
        <a href="mailto:eng.rufaidajumaa@gmail.com">
            <img src="https://img.icons8.com/bubbles/50/000000/important-mail.png" alt="E-mail icon"/>
            <span>E-mail</span>
        </a>
      </div>
      <div className="social-item">
        <a href="https://github.com/rufaidaju" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/bubbles/50/000000/github.png" alt="Github icon"/>
            <span>Github</span>
        </a>
      </div>
      <div className="social-item">
        <a href="https://www.linkedin.com/in/rufaida-jumaa-a15ba4142" target="_blank"  rel="noopener noreferrer">
            <img src="https://img.icons8.com/bubbles/50/000000/linkedin.png" alt="Linkedin icon"/>
            <span>Linkedin</span></a>
      </div>
    </div>
    <small>&copy; Copyright 2020.Rufaida</small> 
  </div>
</section>
)}
export default Footer;
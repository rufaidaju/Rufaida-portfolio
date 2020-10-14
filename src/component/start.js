import React from "react";
import rufaida from "../data/rufaida.pdf"

function Start (){
    return (
    <section id="start">
        <div className="start container">
            <div> 
                <p>Hello, <span></span></p>
                <p>My Name Is <span></span></p>
                <p>Rufaida <span></span></p>
                <a href={rufaida} download className="cta">Download CV</a>
            </div>   
        </div>
  </section>
    )
}
export default Start;
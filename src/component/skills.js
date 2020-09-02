import React from "react";
import  InformationContent from "./information-content"
import  InformationTitle from "./information-title"

function Skills(){
return(
    <section id="informations">
        <div className="informations container">
        <div className="informations-content">
         <InformationTitle />
         <InformationContent />
         <InformationContent />
         <InformationContent />
        </div>
        </div>
    </section>
)
}
export default Skills;

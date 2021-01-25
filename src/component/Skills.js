import React from "react";
import  InformationContent from "./InformationContent"
import  InformationTitle from "./InformationTitle"

let skillsImg = {
    html: "https://img.icons8.com/color/48/000000/html-5.png",
    css: "https://img.icons8.com/color/48/000000/css3.png",
    js: "https://img.icons8.com/color/48/000000/javascript.png",
    node: "https://img.icons8.com/color/48/000000/nodejs.png",
    mysql: "https://img.icons8.com/ios-filled/50/4479a1/mysql-logo.png",
    react: "https://img.icons8.com/cute-clipart/64/000000/react-native.png",
    git: "https://img.icons8.com/color/48/000000/git.png",
    sitecore: "https://img.icons8.com/color/48/000000/sitecore--v1.png",
    umbraco :"https://img.icons8.com/windows/100/000000/umbraco.png"      
}
function Skills(){
    
return(
    <section id="skills">
        <div className="informations container">
            <InformationTitle title="Skills" />
            <div className="informations-content">
                <InformationContent content={{name:"HTML", imgUrl:skillsImg.html }}/>
                <InformationContent content={{name:"CSS", imgUrl:skillsImg.css }}/>
                <InformationContent content={{name:"Java Script", imgUrl:skillsImg.js }}/>
                <InformationContent content={{name:"Node.js", imgUrl:skillsImg.node }}/>
                <InformationContent content={{name:"React", imgUrl:skillsImg.react }}/>
                <InformationContent content={{name:"MySQL", imgUrl:skillsImg.mysql }}/>
                <InformationContent content={{name:"Sitecore", imgUrl:skillsImg.sitecore }}/>
                <InformationContent content={{name:"Umbraco", imgUrl:skillsImg.umbraco }}/>
            </div>
        </div>
    </section>
)
}
export default Skills;
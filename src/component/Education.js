import React from "react";
import  InformationContent from "./InformationContent"
import  InformationTitle from "./InformationTitle"


let educationImg = {
     university :"https://img.icons8.com/dusk/64/000000/university.png",
     hyf:"https://img.icons8.com/officel/80/000000/courses.png",
     secondaryEducation:"https://img.icons8.com/bubbles/100/000000/school.png"
}


function Education(){
return(
    <section id="education">
          <div className="informations container">
               <InformationTitle  title="Education"/>
               <div className="informations-content education-content">
                    <InformationContent content={
                         {name:"Damascus University",
                         imgUrl:educationImg.university,
                         description:`Bachelor of Information Technology Engineering 
                         Computer Systems and Networks 5 year education
                         Received Bachelor of Science GPA (73.64)
                         (Equivalent to the Danish “professions-bachelor som diplomingeniør - IT”)`}
                    } />
                    <InformationContent content={
                         {name:"Hack Your Future Copenhagen",
                         imgUrl:educationImg.hyf,
                         description:`Full Stack Web Development bootcamp
                         HTML, CSS, JavaScript, Node.js, MySQL,Express, React, GIT.`}
                    } />
                    <InformationContent content={
                         {name:`Secondary Education`,
                         imgUrl:educationImg.secondaryEducation,
                         description:`General Certificate Of Secondary Education (Scientific Section)
                         Focus on Mathematics, Physics, Chemistry and Natural Sciences, Arabic, English and French, GPA (95.83).`}
                    } />
               </div>
          </div>
    </section>
)}
export default Education;

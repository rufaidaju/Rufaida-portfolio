import React from "react";
import  InformationTitle from "./InformationTitle"
import Project from "./Project"

//  import MealSharing from "../img/meal-sharing.png"
// import Giphy from "../img/giphy.PNG"
// import MoveCircles from "../img/move-circles.PNG"
// import RandomCircles from "../img/random-circles.PNG"
// import Weather from "../img/weather.PNG"


const projects=[
    {
      projectName:"Meal Sharing",
      description:`Meal sharing website,It's an application where users can book a reservation at a meal another user has created. 
        The user can add a new meal for people to join, review the meal and see all reviews for it as well.`,
      type:`Node.js - Fullstack development`,
      imageSrc:'../img/meal-sharing.png',
      imageAlt:"Meal sharing app"
    },
    {
        projectName:"Move Circles",
        description:`Move the circles from the current random position to the target position :
        Translate one by one: translate the circles one at a time from their random start position to their target .
        Translate all at once: translate all the circles at the same time from their random start position to their target and log All boxes fulfilled out after each element has been moved.`,
        type:`Java Script -Promise.all and calling a promise one at a time`,
        imageAlt:"Move circles app"
      },
      {
        projectName:"Meal Sharing",
        description:`Meal sharing website,It's an application where users can book a reservation at a meal another user has created. 
          The user can add a new meal for people to join, review the meal and see all reviews for it as well.`,
        type:`Node.js - Fullstack development`
      },
      {
        projectName:"Meal Sharing",
        description:`Meal sharing website,It's an application where users can book a reservation at a meal another user has created. 
          The user can add a new meal for people to join, review the meal and see all reviews for it as well.`,
        type:`Node.js - Fullstack development`
      },
      {
        projectName:"Meal Sharing",
        description:`Meal sharing website,It's an application where users can book a reservation at a meal another user has created. 
          The user can add a new meal for people to join, review the meal and see all reviews for it as well.`,
        type:`Node.js - Fullstack development`
      },
]

function Projects(){
    return (
    <section id="projects">
    <div className="projects container">
        <div className="projects-header">
            <InformationTitle  title="Recent Projects"/>
        </div>
        <div className="all-projects">
            <Project project={projects[0]} />
            {/* <Project project={projects[1]} />
            <Project project={projects[2]} />
            <Project project={projects[3]} />
            <Project project={projects[4]} /> */}
        </div>
    </div>
    </section>
    )
}
export default Projects;

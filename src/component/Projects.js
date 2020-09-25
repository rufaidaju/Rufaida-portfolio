import React from "react";
import  InformationTitle from "./InformationTitle"
import Project from "./Project"

const projects=[
    {
      projectName:"Meal Sharing",
      description:`Meal sharing website,It's an application where users can book a reservation at a meal another user has created. 
        The user can add a new meal for people to join, review the meal and see all reviews for it as well.`,
      type:`Node.js - Fullstack development`,
      imageSrc:require('../data/img/meal-sharing.PNG'),
      imageAlt:"Meal sharing app"
    },
    {
      projectName:"Move Circles",
      description:`Move the circles from the current random position to the target position :
      Translate one by one and translate all at once and log All boxes fulfilled out after each element has been moved.`,
      type:`JavaScript -Promise.all and calling a promise one at a time`,
      imageSrc:require('../data/img/move-circles.PNG'),
      imageAlt:"Move circles app"
    },
    {
      projectName:"Random Circles",
      description:`There are two ways to draw the circles:
      create lots of circles in different sizes and colors on a webpage every 100ms.
      create lots of circles in different sizes and colors on a webpage and the circles appear around the cursor.`,
      type:`JavaScript Classes`,
      imageSrc:require('../data/img/random-circles.PNG'),
      imageAlt:"Random circles app"
    },
    {
      projectName:"Giphy",
      description:`A site where a user can search for any word.
        When searching a word the application will find a gif using the searched word using the giphy api.
        User can specify how many gif results the user wants.`,
      type:"JavaScript, Apis, Fetch",
      imageSrc:require('../data/img/giphy.PNG'),
      imageAlt:"Giphy app"
    },
    {
      projectName:"Weather",
      description:`Based on a user's location can find the relevant weather for that user..`,
      type:`JavaScript, Apis, Fetch`,
      imageSrc:require('../data/img/weather.PNG'),
      imageAlt:"Weather app"
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
              <Project project={projects[1]} />
              <Project project={projects[2]} />
              <Project project={projects[3]} />
              <Project project={projects[4]} />
          </div>
      </div>
    </section>
    )
}
export default Projects;

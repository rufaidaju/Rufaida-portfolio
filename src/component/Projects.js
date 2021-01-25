import React from "react";
import  InformationTitle from "./InformationTitle"
import Project from "./Project"

const projects=[
    {
      projectName:"Arabi Food Tapas",
      githubLink:"https://github.com/rufaidaju/ArabiFoodTapas",
      onlineLink:"https://arabifoodtapas.herokuapp.com",
      description:`Arabi Food Tapas is a website for a resturant in Denmark`,
      type:`React.js`,
      imageSrc:require('../data/img/arabi-food.png'),
      imageAlt:"Arabi Food Tapas app"
    },
    {
      projectName:"Meal Sharing",
      githubLink:"https://github.com/rufaidaju/meal-sharing",
      onlineLink:"https://dev-meal-sharing.herokuapp.com/",
      description:`Meal sharing website,It's an application where users can book a reservation at a meal another user has created. 
        The user can add a new meal for people to join, review the meal and see all reviews for it as well.`,
      type:`Node.js - Fullstack development`,
      imageSrc:require('../data/img/meal-sharing.PNG'),
      imageAlt:"Meal sharing app"
    },
    {
      projectName:"Speedy Typer",
      githubLink:"https://github.com/rufaidaju/Speedy-typer/",
      onlineLink: "https://rufaidaju.github.io/Speedy-typer/",
      description:`Game Joy Hack Your Future Community challenge
                   It's for two players, who will type the same random sentence,
                   there is a timer for both of them to know the winner.`,
      type:`JavaScript, HTML, CSS`,
      imageSrc:require('../data/img/speedy-typer.png'),
      imageAlt:"Speedy Typer app"
    },
    {
      projectName:"Github Cards",
      githubLink:"https://github.com/rufaidaju/Github-cards-app",
      onlineLink: "pppppppppppppppppppppppppppppppppppppppp",
      description:`Create simple github profile card component that displays information about 
      lists of Github profiles, take input from the user and use it to make calls to an API
      Using React class and functional components  `,
      type:`React.js`,
      imageSrc:require('../data/img/github-cards.png'),
      imageAlt:"Github Cardsa app"
    },

    {
      projectName:"Move Circles",
      githubLink:"https://github.com/rufaidaju/hyf-homework/tree/master/javascript/javascript3/week2",
      onlineLink: null,
      description:`Move the circles from the current random position to the target position :
      Translate one by one and translate all at once and log All boxes fulfilled out after each element has been moved.`,
      type:`JavaScript -Promise.all and calling a promise one at a time`,
      imageSrc:require('../data/img/move-circles.PNG'),
      imageAlt:"Move circles app"
    },
    {
      projectName:"Random Circles",
      githubLink:"https://github.com/rufaidaju/hyf-homework/tree/master/javascript/javascript3/week3/circles",
      description:`There are two ways to draw the circles:
      create lots of circles in different sizes and colors on a webpage every 100ms.
      create lots of circles in different sizes and colors on a webpage and the circles appear around the cursor.`,
      type:`JavaScript Classes`,
      imageSrc:require('../data/img/random-circles.PNG'),
      imageAlt:"Random circles app"
    },
    {
      projectName:"Giphy",
      githubLink:"https://github.com/rufaidaju/hyf-homework/tree/master/javascript/javascript3/week1/Giphy-api",
      description:`A site where a user can search for any word.
        When searching a word the application will find a gif using the searched word using the giphy api.
        User can specify how many gif results the user wants.`,
      type:"JavaScript, Apis, Fetch",
      imageSrc:require('../data/img/giphy.PNG'),
      imageAlt:"Giphy app"
    },
    {
      projectName:"Weather",
      githubLink:"https://github.com/rufaidaju/hyf-homework/tree/master/javascript/javascript3/week1/Weather-app",
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

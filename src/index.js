import React from "react";
import ReactDOM from "react-dom";

import Start from "./component/Start"
import Skills from "./component/Skills"
import Education from "./component/Education"
import Projects from "./component/Projects"
ReactDOM.render(
    <div>
        <Start />
        <Skills />
        <Education />
        <Projects />
    </div>
    ,document.getElementById("root"));
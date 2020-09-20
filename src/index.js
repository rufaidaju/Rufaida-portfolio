import React from "react";
import ReactDOM from "react-dom";

import Header from "./component/Header"
import Start from "./component/Start"
import Skills from "./component/Skills"
import Education from "./component/Education"
import Projects from "./component/Projects"
ReactDOM.render(
    <div>
        <Header />
        <Start />
        <Skills />
        <Education />
        <Projects />
    </div>
    ,document.getElementById("root"));
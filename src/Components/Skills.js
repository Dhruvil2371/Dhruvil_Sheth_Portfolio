import React from "react";
import classes from "./Skills.module.css";

const Skills = (props) => {
  return (
    <div id="skills" className={props.dark ? classes.dark_skill :classes.project}>
      <h1 className={classes.p_header}>Skills</h1>
      <figure className={classes.figurea}>
      <figure className={classes.figure}>
        <img
          src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"
          width="63"
          height="64"
          alt="HTML5 Powered"
          title="HTML5 Powered"
        />
        <figcaption>HTML 5</figcaption>
      </figure>
      <figure className={classes.figure}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1200px-CSS3_logo.svg.png"
          width="63"
          height="64"
          alt="CSS 3"
          title="CSS 3"
        />
        <figcaption>CSS 3</figcaption>
        </figure>
        <figure>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
          width="63"
          height="64"
          alt="JavaScript"
          title="JavaScript"
        />
        <figcaption>JavaScript</figcaption>
        </figure>
        <figure>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          width="78"
          height="64"
          alt="React"   
          title="React"
        />
        <figcaption>REACT</figcaption>
        </figure>
        </figure>
    </div>
  );
};

export default Skills;

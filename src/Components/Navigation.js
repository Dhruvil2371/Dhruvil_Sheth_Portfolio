import React from "react";
import { Link } from "react-scroll";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (<div>
    <img className={classes.image}  src="data:image/png;base64,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" alt='gitHub'/>
    <div className={classes.border}>
      <nav className={props.dark ? classes.dark_nav : classes.nav}>
        <ul>
          {" "}
          <Link
            to="about"
            spy={true}
            smooth={true}
            className={classes.nav_about}
          >
            About
          </Link>
        </ul>
        <ul>
          {" "}
          <Link
            to="projects"
            spy={true}
            smooth={true}
            className={classes.nav_project}
          >
            Project
          </Link>
        </ul>
        <ul>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            className={classes.nav_skill}
          >
            Skills
          </Link>
        </ul>
      </nav>
    </div>
    </div>
  );
};

export default Navigation;

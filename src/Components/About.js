import React from "react";
import classes from "./about.module.css";

const About = (props) => {
  return (
    <div id="about" className={props.dark ? classes.dark_app : ""}>
      <h1 className={classes.h1}>About Me</h1>
      <div className={classes.about}>
        <figure className={classes.picture}>
          <img
            src="https://dox4euoyzny9u.cloudfront.net/images/textanywhere/website/developer-zone-banner.svg"
            alt="hi"
          />
          <figcaption>Dhruvil</figcaption>
        </figure>
        <div className={classes.card}>
          <div className={classes.dot_detail}>
            <span className={classes.dotred}></span>
            <span className={classes.dotyellow}></span>
            <span className={classes.dotgreen}></span>
          </div>
          <div className={classes.about_me_detail}>
            <h3>Hi :</h3>
            <p> I'm Dhruvil Sheth.</p>
            <p>
              A newbie front end developer with the zeal to learn and be a full
              stack developer and to use my existing skillset to create smooth
              and good applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

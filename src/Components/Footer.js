import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={classes.footer}>
        <figure className={classes.fig}>
          <a
            href="https://www.npmjs.com/package/react-dark-mode-toggle"
            target="_blanck"
          >
            <img
              className={classes.logo}
              src="data:image/png;base64,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"
              alt="github logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/dhruvil-sheth-b1409a147"
            target="_blanck"
          >
            <img
              className={classes.logo}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAYFBMVEUAAAD///9tbW26urphYWH09PQ5OTmxsbF1dXUwMDAODg7f39/k5ORmZmagoKDx8fHBwcHr6+tFRUU+Pj5LS0spKSlaWlpRUVGQkJDX19eGhoZ7e3vNzc0WFhampqYaGhoLyg9VAAACiUlEQVR4nO3c7XKqMBAG4A2IgOFTBdrqsfd/l8VSKZh1BjLD7nbOvn86Uyg+jUCS1QDmJzZO0gNQ5ZAmsX28NAw/spzu9UdHnk0NBTlgSPFrCJgIAMHDwEcYEMD3Rgwp7oaMlQCQ9Yac2ZAbsPQX5TwHCzEzAXpBwk3oBSk3oRdwnw4gQKD5M2m64NxwAtqw/O7cy7hlEuwr85uKpTHOtZkmOzIQzHPIEfvaMZTUN7PKIRhD3L22CMGYE6khRA20DVGiBktJaFCCKSnfjA43mB2hIXhhoJwJuTeoIZTdhoTzQcJ1ATFquJEa8Pskca8loL+AJnMINTEB4OhcFGdyAxzn10bNQOjnX9OLg21qfortvTFKe2MYTE4Yu6ClHbpoNBrN/5FTEr5nmbVVke99j9FV4XOqWc/54WwP47FOcrlOurvo6lkHxmYYsxkOMiONfv7jN2dEHBU+dQN/w9kdgd2HHx5t4W14wwT3VGQGbCz8aIq1pXlPw9X97WT7yimzlyHFp0ZjynXzVR9D/fJcGBH/tjYsyLsAw6oPUrcyRCumKVsZzFWAYUUtZztDSGSo8TrOEAJDVHx3Xe3LHRb3Xt6G23gb2r/oOxa/Gb6Gy3Qf/NZtP7c1XOZHQVsiWjq48zM4zWyxvbotDZFTJUCLzku7cC+DO1T6xAZ2S7914mVASurYabm08u5lQPojbEixpcE9HfDjbGpALrqdGtSgBjWoQQ1qUIMa1KAGNahBDWpQg2BDgvztrJaFlR6ROkyO7La0WJwmwXOS2VfuO2d7ECAF2AY5Dv/yH43mj4R/ldhBxHo9CesWJazflLCOVcJ6XhHrmiWs7xaxzl3Een8Rzz0Q8fwHw/ocjC9zlCLIiabtSgAAAABJRU5ErkJggg=="
              alt="github logo"
            />
          </a>
        </figure>
        <h1 className={classes.h2}>Copyright &copy; Dhruvil Sheth</h1>
      </div>
    </React.Fragment>
  );
};

export default Footer;

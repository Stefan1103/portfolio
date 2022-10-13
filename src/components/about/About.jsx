import React from "react";
import { LinkedIn } from "@material-ui/icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-heading">
        {" "}
        <h2>About me</h2>
      </div>

      <div className="description-text">
        <p>
          Hi i am Stefan, a developer with a passion for learning and creating!
          <br></br>
          I’m always ready for new challenges and I have a have high motivation
          and big will for further development.
        </p>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <h4>Intermediate knowledge:</h4>
        <p>
          ReactJS, HTML5, SCSS, CSS3, Bootstrap, Javascript, Redux, JQuery, NPM,
          MaterialUI{" "}
        </p>
        <h4>Basic knowledge:</h4>
        <p>C++, C, NodeJS, MongoDB, SQL</p>
      </div>
      <div className="socials-links">
        <a
          href="https://github.com/Stefan1103?tab=repositories"
          target="_blank"
        >
          <GitHubIcon style={{ fontSize: "1.9rem" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/stefan-stevanovski-0b89b7183/"
          target="_blanlk"
        >
          <LinkedIn fontSize="large" />
        </a>
        <a href="https://www.facebook.com/stefan.stevanovski" target="_blanlk">
          <FacebookIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
};

export default About;

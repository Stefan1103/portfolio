import React from "react";
import { useParams } from "react-router";
import { sliderProjects } from "../../data";
import { Link } from "react-router-dom";

const Description = () => {
  const { clickedId } = useParams();
  const filteredProjects = sliderProjects.filter((project) => {
    console.log(project.id);

    return project.id === parseInt(clickedId);
  });
  const { icon, title, id, desc, webLink, gitLink, img } = filteredProjects[0];
  return (
    <div className="containerDesc">
      <h1>{title}</h1>
      <div className="innerContainer">
        <div className="left">
          <img src={`/${img}`} alt="#" />
        </div>
        <div className="right">
          <p>{desc}</p>
        </div>
      </div>

      <div className="btn-container">
        <a className="btn-back" href="/#portfolio">
          Back
        </a>
        <a className="btn-main" href={webLink} target="_blank">
          Got to website
        </a>
        <a className="btn-main" href={gitLink} target="_blank">
          Go to source code
        </a>
      </div>
    </div>
  );
};

export default Description;

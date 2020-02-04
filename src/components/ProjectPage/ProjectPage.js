import React from "react";
import RecyclingGame from "./images/recycling-game.png";
import "./ProjectPage.css";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  return (
    <section className="projectGallery">
      <h2 className="headline"> Projects</h2>
      <figure className="container-animation">
        <img src={RecyclingGame} alt={"recycling game project"} />
        <figcaption className="overlay">
          <h2 className="title">reduce, reuse, recycle</h2>
          <p className="description">
            A game for young people bwtwen the age of 4-6 years old to teach
            them about recycling
          </p>
        </figcaption>
        <a href={"https://github.com/fac18/recycling-game"} target="_blank"></a>
      </figure>
    </section>
  );
};

export default ProjectPage;

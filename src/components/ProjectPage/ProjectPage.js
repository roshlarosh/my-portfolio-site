import React from "react";
import "./ProjectPage.css";
import RecyclingGame from "./images/recycling-game.png";
import Gifsthesia from "./images/gifsthesia.png";
import Squall from "./images/squall.png";
import Joy from "./images/joy.png";

const ProjectPage = () => {
  return (
    <section className="projectGallery">
      <h2 className="headline"> Projects</h2>
      <hr className="underline" />
      <figure className="container-animation">
        <img src={Joy} alt={"joy project"} />
        <figcaption className="overlay">
          <h2 className="title">Joy</h2>
          <p className="description">
            Efficacy tool to capture loneliness before and after being
            prescribes comminity services.
          </p>
        </figcaption>
        <a href={"https://github.com/fac18/joy"} target="_blank"></a>
      </figure>
      <figure className="container-animation">
        <img src={RecyclingGame} alt={"recycling game project"} />
        <figcaption className="overlay">
          <h2 className="title">Reduce, reuse, recycle</h2>
          <p className="description">
            A game for young people bwtwen the age of 4-6 years old to teach
            them about recycling
          </p>
        </figcaption>
        <a href={"https://github.com/fac18/recycling-game"} target="_blank"></a>
      </figure>
      <figure className="container-animation">
        <img src={Squall} alt={"squall project"} />
        <figcaption className="overlay">
          <h2 className="title">Squall</h2>
          <p className="description">
            Sign up or login to create your superhero and have it display in the
            dashboard.
          </p>
        </figcaption>
        <a
          href={"https://github.com/fac18/week7-coda-squall"}
          target="_blank"
        ></a>
      </figure>
      <figure className="container-animation">
        <img src={Gifsthesia} alt={"gifsthesia project"} />
        <figcaption className="overlay">
          <h2 className="title">Gifsthesia</h2>
          <p className="description">
            Guess the song from the lyrics gifs extracted from giphy and
            musixmatch api call.
          </p>
        </figcaption>
        <a
          href={"https://github.com/fac18/week3-cikp-gifsthesia"}
          target="_blank"
        ></a>
      </figure>
    </section>
  );
};

export default ProjectPage;

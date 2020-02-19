import React from "react";
import "./ProjectPage.css";
import RecyclingGame from "./images/recycling-game.png";
import Gifsthesia from "./images/gifsthesia.png";
import Squall from "./images/squall.png";
import Joy from "./images/joy.png";
import { makeStyles } from "@material-ui/core/styles";
import htmlIcon from "./images/html.png";
import cssIcon from "./images/css.png";
import nodeExpressIcon from "./images/expressjs.jpg";
import gitIcon from "./images/git.png";
import herokuIcon from "./images/heroku.png";
import jsIcon from "./images/js.png";
import postgresqlIcon from "./images/postgresql.png";
import reactIcon from "./images/react.png";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia
} from "@material-ui/core";

const useStyles = makeStyles({
  stackCard: {
    marginTop: "100px",
    marginBottom: "100px",
    marginLeft: "10rem",
    width: "70rem",
    height: "160px"
  }
});

const ProjectPage = () => {
  const classes = useStyles();
  return (
    <section className="projectGallery">
      <h2 className="projects-title"> Projects</h2>
      <hr className="underline" />
      <div className="project-container">
        <figure className="container-animation">
          <img src={Joy} alt={"joy project"} />
          <figcaption className="overlay">
            <h2 className="title">Joy</h2>
            <p className="description">
              Design and build an efficacy tool based on UCLA loneliness scale
              to capture data about people's wellbeing before and after "social
              prescribing".
            </p>
          </figcaption>
          <a href={"https://github.com/fac18/joy"} target="_blank"></a>
        </figure>
        <figure className="container-animation">
          <img
            src={RecyclingGame}
            alt={"recycling game project"}
            className="recycling"
          />
          <figcaption className="overlay">
            <h2 className="title">Reduce, reuse, recycle</h2>
            <p className="description">
              Build an app that teaches kids how to recycle through an
              Interactive and educational drag and drop game.
            </p>
          </figcaption>
          <a
            href={"https://github.com/fac18/recycling-game"}
            target="_blank"
          ></a>
        </figure>
      </div>
      <div className="project-container">
        <figure className="container-animation">
          <img src={Squall} alt={"squall project"} />
          <figcaption className="overlay">
            <h2 className="title">Squall</h2>
            <p className="description">
              Sign up or login to create your superhero and have it display in
              the dashboard.
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
      </div>
      <h3 className="stack-title">Tech Stack</h3>
      <div className="stackCard">
        <img src={htmlIcon} alt="htmlicon" className="" />
        <img src={cssIcon} alt="htmlicon" className="" />
        <img src={gitIcon} alt="htmlicon" className="" />
        <img src={herokuIcon} alt="htmlicon" className="" />
        <img src={postgresqlIcon} alt="htmlicon" className="" />
        <img src={reactIcon} alt="htmlicon" className="" />
        <img src={nodeExpressIcon} alt="htmlicon" className="" />
        <img src={jsIcon} alt="htmlicon" className="" />
      </div>
    </section>
  );
};

export default ProjectPage;

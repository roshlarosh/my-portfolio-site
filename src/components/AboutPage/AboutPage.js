import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div>
      <h1 className="headline">About me</h1>
      <hr className="underline" />
      <p className="bio">
        <b>Full-stack developer at Founders & Coders</b> with a background in
        software testing. I enjoy writing <b>clean, concise code</b>, and{" "}
        <b>building intuitive UI</b>. I am looking for a front-end/full-stack
        role in a fast-paced forward-thinking company with a{" "}
        <b>supportive culture</b> that values
        <b>diversity</b>, where I can <b>learn</b> and grow to be the best web
        software developer I can be.
      </p>
      <h2 className="subHeadline">Tech stack</h2>
      <div className="listContainer">
        <ul className="list listLeft">
          <li>HTML & CSS</li>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>Reactjs</li>
        </ul>
        <ul className="list listRight">
          <li>Express</li>
          <li>Handlebars</li>
          <li>Postlist listRight</li>
          <li>ES6</li>
        </ul>
      </div>
      <h2 className="subHeadline">Skills & Methodologies</h2>
      <div className="listContainer">
        <ul className="list listLeft">
          <li>Travis CI</li>
          <li>Test-driven development</li>
          <li>Git & version control</li>
          <li>Tape + Supertest</li>
          <li>Pair Programming</li>
        </ul>
        <ul className="list listRight">
          <li>Linters</li>
          <li>Heroku & Netlify</li>
          <li>Jest & enzyme</li>
          <li> React Testing Library</li>
          <li>Agile</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;

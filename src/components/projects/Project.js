import React from "react";
import "./Project.css";
import Bg from "../../img/golden-gate.png";

function Project() {
  return (
    <div className="projects">
      <div className="background">
        <img src={Bg} alt="" className="bg-img" />
      </div>
      <div className="projects-info">
        <h1 className="heading">My Projects</h1>
        <div className="proj1">
          <h3 className="proj-title">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://smritigurung.github.io/skincare/"
            >
              Glow Skin Web Application
            </a>
          </h3>
          <p className="proj-desc">
            Designed and built e-commerce responsive web application capable of
            successfully navigating through different routes to browse, add to
            cart and buy skincare products using React and styled-components
          </p>
        </div>

        <div className="proj2">
          <h3 className="proj-title">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/jamessnguyenn/EZ-Apply"
            >
              EZ Apply Web Application
            </a>
          </h3>
          <p className="proj-desc">
            Collaborated with 5-team members to create web-based application
            which provides easier ways for job seekers to apply for multiple
            jobs and also giving recruiters to post jobs and recruit new hires
            utilizing MERN stack, Agile approach, Selenium and Postman for
            testing
          </p>
        </div>

        <div className="proj3">
          <h3 className="proj-title">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://smritigurung.github.io/snapchat-clone/"
            >
              Snapchat clone
            </a>
          </h3>
          <p className="proj-desc">
            Created Snapchat clone with React Webcam feature; used Redux and
            implemented reducers to generate associated actions in React and
            also utilized Firebase tools to invoke Google authentication as
            provider inside this application
          </p>
        </div>

        <div className="proj4">
          <h3 className="proj-title">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/smritigurung/hulu2.0-react"
            >
              Hulu clone
            </a>
          </h3>
          <p className="proj-desc">
            Created responsive Hulu 2.0 website clone making it server-side
            rendered with Next.js, React.js, and achieved smooth animation using
            Tailwind CSS; also used REST API from TMDB database to enable
            server-side rendered API calls to TMDB server to fetch all movie
            data
          </p>
        </div>
        <div className="proj5">
          <h3 className="proj-title">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/smritigurung/tic-tac-toe-game"
            >
              Tic Tac Toe Game
            </a>
          </h3>
          <p className="proj-desc">
            Designed and built 3 x 3 grid Tic Tac Toe game with 3-team members
            where two players can play together utilizing Java, GUI and applying
            concepts of Object-oriented Programming such as Observer (MVC) and
            Strategy design patterns
          </p>
        </div>

        <p
          className="link-info"
          style={{
            color: "black",
            letterSpacing: "1px",
            fontSize: "13px",
            lineHeight: "1.5rem",
          }}
        >
          For more projects, please visit my{" "}
          <a
            className="github-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/smritigurung"
          >
            Github
          </a>{" "}
          page.
          <br />
          If you also like to view my r??sum??, please click{" "}
          <a
            className="resume-link"
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/document/d/1c0d1OYWdtmN-g7yWd981Xe_zhwriMJsXYUgx-X5e6H0/edit?usp=sharing"
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Project;

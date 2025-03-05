import React from "react";
import "./MyWork.css";

function MyWorkPopup({ onClose }) {
  return (
    <div className="mywork-popup">
      <div className="portfolio">
      <img
        id="exit-icon"
        src="/images/Exit.svg"
        alt="exit icon"
        onClick={onClose}
      />
      <h2>Projects</h2>
        <div className="projects">
          <div className="project">
            <img className="project-image" src="./images/3.png" alt="project image" />
            <h3>TIC TAC TOE</h3>
            <a href="https://github.com/fthuggy/TTT" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                className="git-logo"
                alt="GitHub logo"
              />
            </a>
            <a href="https://fthuggy.github.io/TTT/" target="_blank">
              <img
                src="./images/link-svgrepo-com.svg"
                className="link-logo"
                alt="logo and direct link"
              />
            </a>
            <p>
              A classic game for two players, this project was an assignment
              from the Odin Project and served as a great opportunity to
              practice newfound JavaScript skills.<br /><br />
              The game features a clean and simple user interface, ensuring
              players can focus on the fun without distractions.
            </p>
            
          </div>
          <div className="project">
            <img className="project-image" src="./images/6.png" alt="project image" />
            <h3>WEATHER APP</h3>
            <a href="https://github.com/fthuggy/weather-app" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                className="git-logo"
                alt="GitHub logo"
              />
            </a>
            <a href="https://whtrapp.netlify.app/" target="_blank">
              <img
                src="./images/link-svgrepo-com.svg"
                className="link-logo"
                alt="logo and direct link"
              />
            </a>
            <p>
              WeatherApp is a user-friendly weather application built using a
              weather API. Users can search for any location to get real-time
              weather updates and forecasts.<br /><br />
              The app retrieves live data and presents it in a clean,
              responsive design, making it easy to plan your day no matter
              where you are.
            </p>
          
          </div>
          <div className="project">
            <img className="project-image" src="./images/4.png" alt="project image" />
            <h3>CELEBRITY QUIZ</h3>
            <a href="https://github.com/fthuggy/quiz" target="_blank">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                className="git-logo"
                alt="GitHub logo"
              />
            </a>
            <a href="https://quiz-ten-bay.vercel.app/" target="_blank">
              <img
                src="./images/link-svgrepo-com.svg"
                className="link-logo"
                alt="logo and direct link"
              />
            </a>
            <p>
              Celebrity Quiz is a fun and interactive quiz app built as my
              introduction to React. It features 10 questions about celebrity
              culture, challenging users on their knowledge of famous stars,
              movies, and entertainment trends. <br /><br />With a simple and
              engaging design, it’s the perfect way to test how well you know
              the world of celebrities!
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWorkPopup;
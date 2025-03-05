import React from "react";
import "./Collaborations.css";

function CollabPopup({ onClose }) {
  return (
    <div className="collab-popup">
      <div className="collab-portfolio">
        <img
          id="collab-exit-icon"
          src="/images/Exit.svg"
          alt="exit icon"
          onClick={onClose}
        />
        <h2>Collaborations</h2>
        <div className="collab-projects">
          <div className="collab-project">
            <img
              className="collab-project-image"
              src="./images/1.png"
              alt="project image"
            />
            <h3>BLOOM</h3>
            <a
              href="https://github.com/minzikimi/bloom-e-commerce"
              target="_blank"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                className="collab-git-logo"
                alt="GitHub logo"
              />
            </a>
            <a href="https://bloom-ecommerce-hi26.netlify.app/" target="_blank">
              <img
                src="./images/link-svgrepo-com.svg"
                className="collab-link-logo"
                alt="logo and direct link"
              />
            </a>
            <p>
              Bloom is a sleek and user-friendly e-commerce platform designed to
              provide a seamless shopping experience. Users can browse products,
              filter by category, add items to their cart, and save selections
              with localStorage. <br />
              <br />
              The platform is built with scalability in mind, featuring
              responsive design and automated testing with Jest to ensure
              reliability.
            </p>
          </div>
          <div className="collab-project">
            <img
              className="collab-project-image"
              src="./images/2.png"
              alt="project image"
            />
            <h3>QUEFLIX</h3>
            <a
              href="https://github.com/goksinb/new-group1-project"
              target="_blank"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                className="collab-git-logo"
                alt="GitHub logo"
              />
            </a>
            <a href="https://new-group1-project.vercel.app/" target="_blank">
              <img
                src="./images/link-svgrepo-com.svg"
                className="collab-link-logo"
                alt="logo and direct link"
              />
            </a>
            <p>
              QUEFLIX is a platform that lets users search for movies and TV
              shows, see where to stream them, and save favorites to a
              personalized watchlist. Users can edit titles, manage their lists,
              and access streaming links with a single click.
              <br />
              <br />
              This project was developed using Agile methodology, where I took
              on a leadership role in guiding the team, ensuring smooth
              collaboration, and maintaining an efficient workflow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollabPopup;

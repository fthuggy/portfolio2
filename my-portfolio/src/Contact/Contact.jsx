import React from "react";
import "./Contact.css";

function ContactPopup({ onClose }) {
  return (
    <div className="contactme-popup">
      <div className="contactme-content">
        <img
          id="exit-icon"
          src="/images/Exit.svg"
          alt="exit icon"
          onClick={onClose}
        />
        <div className="info-contact">
          <h2>Contact me!</h2>
          <p>fatou.taal@hyperisland.se</p>
          <div className="contact-logos">
            <a href="https://github.com/fthuggy/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                className="git-logo"
                alt="GitHub logo"
              />
            </a>
            <a href="https://www.linkedin.com/in/fatoutaal/" target="_blank" rel="noopener noreferrer">
              <img
                src="./images/icons8-linkedin.svg"
                className="link-logo"
                alt="LinkedIn logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPopup;
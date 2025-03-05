import React, { useState } from "react";
import "./App.css";
import AboutMePopup from "./Aboutme/AboutMe";
import CvPopup from "./CV/CV";

function App() {
  const [showAboutMePopup, setShowAboutMePopup] = useState(false);
  const [showCvPopup, setShowCvPopup] = useState(false);
  const [dropDownAboutMe, setDropDownAboutMe] = useState(false);
  const [dropDownCv, setDropDownCv] = useState(false);

  const handleOpenAboutMePopup = () => {
    setDropDownAboutMe(true);
    setTimeout(() => {
      setShowAboutMePopup(true);
    }, 300); // Match the duration of the CSS transition
  };

  const handleCloseAboutMePopup = () => {
    setShowAboutMePopup(false);
    setDropDownAboutMe(false);
  };

  const handleOpenCvPopup = () => {
    setDropDownCv(true);
    setTimeout(() => {
      setShowCvPopup(true);
    }, 300); // Match the duration of the CSS transition
  };

  const handleCloseCvPopup = () => {
    setShowCvPopup(false);
    setDropDownCv(false);
  };

  return (
    <div className="portfolio-container">
      <div className="first-box">
        <h1>Fatou Taal</h1>
        <p className="role">Frontend Developer</p>
      </div>
      <div className="second-box">
        <div className="vertical-btn">
          <button className={`btn ${dropDownAboutMe ? "drop-down" : ""}`} id="btn1" onClick={handleOpenAboutMePopup}>
            About me
          </button>
          <button className="btn" id="btn2">
            My work
          </button>
          <button className="btn" id="btn2">
            Collaborations
          </button>
          <button className={`btn ${dropDownCv ? "drop-down" : ""}`} id="btn2" onClick={handleOpenCvPopup}>
            CV
          </button>
          <button className="btn" id="btn3">
            Contact
          </button>
        </div>
      </div>
      {showAboutMePopup && <AboutMePopup onClose={handleCloseAboutMePopup} />}
      {showCvPopup && <CvPopup onClose={handleCloseCvPopup} />}
      <footer>© 2025 Fatou Taal</footer>
    </div>
  );
}

export default App;

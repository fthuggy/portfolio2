import React, { useState } from "react";
import "./App.css";
import AboutMePopup from "./Aboutme/AboutMe";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const handleOpenPopup = () => {
    setDropDown(true);
    setTimeout(() => {
      setShowPopup(true);
    }, 100); // Match the duration of the CSS transition
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setDropDown(false);
  };

  return (
    <div className="portfolio-container">
      <div className="first-box">
        <h1>Fatou Taal</h1>
        <p className="role">Frontend Developer</p>
      </div>
      <div className="second-box">
        <div className="vertical-btn">
          <button className={`btn ${dropDown ? "drop-down" : ""}`} id="btn1" onClick={handleOpenPopup}>
            About me
          </button>
          <button className="btn" id="btn2">
            My work
          </button>
          <button className="btn" id="btn2">
            Collaborations
          </button>
          <button className="btn" id="btn2">
            CV
          </button>
          <button className="btn" id="btn3">
            Contact
          </button>
        </div>
      </div>
      {showPopup && <AboutMePopup onClose={handleClosePopup} />}
      <footer>© 2025 Fatou Taal</footer>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import AboutMePopup from "./Aboutme/AboutMe";
import CvPopup from "./CV/CV";
import MyWorkPopup from "./Mywork/MyWork";
import ContactPopup from "./Contact/Contact";
import CollabPopup from "./Collaborations/Collaborations";

function App() {
  const [showAboutMePopup, setShowAboutMePopup] = useState(false);
  const [showCvPopup, setShowCvPopup] = useState(false);
  const [showMyWorkPopup, setShowMyWorkPopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [showCollabPopup, setShowCollabPopup] = useState(false); // Added state for collab popup
  const [dropDownAboutMe, setDropDownAboutMe] = useState(false);
  const [dropDownCv, setDropDownCv] = useState(false);
  const [dropDownMyWork, setDropDownMyWork] = useState(false);
  const [dropDownContact, setDropDownContact] = useState(false);
  const [dropDownCollab, setDropDownCollab] = useState(false); // Corrected state name

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

  const handleOpenMyWorkPopup = () => {
    setDropDownMyWork(true);
    setTimeout(() => {
      setShowMyWorkPopup(true);
    }, 300); 
  };

  const handleCloseMyWorkPopup = () => {
    setShowMyWorkPopup(false);
    setDropDownMyWork(false);
  };

  const handleOpenContactPopup = () => {
    setDropDownContact(true);
    setTimeout(() => {
      setShowContactPopup(true);
    }, 300); 
  };

  const handleCloseContactPopup = () => {
    setShowContactPopup(false);
    setDropDownContact(false);
  };

  const handleOpenCollabPopup = () => {
    setDropDownCollab(true);
    setTimeout(() => {
      setShowCollabPopup(true);
    }, 300); 
  };

  const handleCloseCollabPopup = () => {
    setShowCollabPopup(false);
    setDropDownCollab(false);
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
          <button className={`btn ${dropDownMyWork ? "drop-down" : ""}`} id="btn2" onClick={handleOpenMyWorkPopup}>
            Projects
          </button>
          <button className={`btn ${dropDownCollab ? "drop-down" : ""}`} id="btn2" onClick={handleOpenCollabPopup}>
            Collaborations
          </button>
          <button className={`btn ${dropDownCv ? "drop-down" : ""}`} id="btn2" onClick={handleOpenCvPopup}>
            CV
          </button>
          <button className={`btn ${dropDownContact ? "drop-down" : ""}`} id="btn3" onClick={handleOpenContactPopup}>
            Contact
          </button>
        </div>
      </div>
      {showAboutMePopup && <AboutMePopup onClose={handleCloseAboutMePopup} />}
      {showCvPopup && <CvPopup onClose={handleCloseCvPopup} />}
      {showMyWorkPopup && <MyWorkPopup onClose={handleCloseMyWorkPopup} />}
      {showContactPopup && <ContactPopup onClose={handleCloseContactPopup} />}
      {showCollabPopup && <CollabPopup onClose={handleCloseCollabPopup} />} {/* Corrected condition */}
      <footer>© 2025 Fatou Taal</footer>
    </div>
  );
}

export default App;
import React, { useState } from "react";
import "./CV.css";

function CvPopup({ onClose }) {
  const [showExperience, setShowExperience] = useState(false);

  const handleShowExperience = () => {
    setShowExperience(true);
  };

  return (
    <div className="cv-popup">
      <div className="cv-content">
        <img
          id="exit-icon"
          src="/images/Exit.svg"
          alt="exit icon"
          onClick={onClose}
        />
        {!showExperience ? (
          <div className="not-found">
            <h1>404</h1>
            <p>
              Frontend experience not found... Will you help me fix this bug?
            </p>
            <div className="other-experience">
              <p>
                Don’t worry! I do have experience in my ‘backend’ (a.k.a. my
                previous jobs). <br></br> Want to see?
              </p>
              <button id="experience-btn" onClick={handleShowExperience}>
                Click Here!
              </button>
            </div>
          </div>
        ) : (
          <div className="experience">
            <h2>Previous Work Experience</h2>
            <ul>
              <li>
                <strong>
                  Social Media Manager | NBV | aug 2022 - dec 2023
                </strong>
              </li>
              <p>
                - Organized and promoted a digital music camp featuring
                producers and songwriters from across Sweden, successfully
                filling all available spots through a targeted social media
                campaign.
              </p>
              <p>
                - Managed a project with associations and study circles
                participating in a quiz about music genres.
              </p>
              <p>
                -Strengthened the organization’s presence on social media
                platforms, including Instagram, Facebook, and LinkedIn.
              </p>
              <p>
                - Trained business developers on image and text management,
                marketing strategies, and audience targeting, leading to
                increased social media engagement.
              </p>
              <p>
                - Regularly updated the organization’s website with relevant
                information and events.
              </p>
              <p>
                - Led cross-departmental projects to achieve shared goals and
                foster collaboration.
              </p>
              <li>
                {" "}
                <strong>
                  Customer Service Representative | Carglass | jan 2022 – aug
                  2022
                </strong>
              </li>
              <p>
                - Managed incoming calls and chat to schedule, reschedule, and
                cancel customer appointments.
              </p>
              <p>
                - Communicated with insurance companies to verify customers'
                insurance coverage.
              </p>
              <p>
                - Ordered windshields and ensured correct delivery for
                customers' vehicles.
              </p>
              <li>
                <strong>Shift Lead | foodora | aug 2019 – jan 2022</strong>
              </li>
              <p>
                - Oversaw daily operations of the customer service department,
                ensuring efficiency and high service standards.
              </p>
              <p>
                - Managed administrative tasks and coordinated with other
                departments to resolve technical issues.
              </p>
              <p>
                - Conducted training sessions for new agents to enhance team
                performance and service quality.
              </p>
              <li>
                <strong>
                  Editor | Equalizer Magazine | dec 2017- dec 2019
                </strong>
              </li>
              <p>
                - Wrote news articles on music, beauty, and fashion, delivering
                engaging and well-researched content.
              </p>
              <p>
                - Filmed interviews and produced dynamic content for Equalizer's
                social media platforms.
              </p>
              <p>
                - Led marketing initiatives to recruit new writers and expand
                the magazine's reach.
              </p>
              <p>
                - Managed event planning for the magazine's launch, ensuring a
                successful and well-executed debut.
              </p>
              <li>
                {" "}
                <strong>
                  Project Manager | Kulturföreningen Podium | apr 2018 - sep
                  2018
                </strong>
              </li>
              <p>
                - Planned and executed the entire project, including booking
                artists and organizing activities such as songwriting, dance,
                and spoken word.
              </p>
              <p>
                - Managed communication on Podium's social media channels to
                increase awareness and engagement with the event, both before,
                during, and after the project.
              </p>
              <p>
                - Contributed to encouraging children and young people to engage
                in reading, basketball, and other outdoor activities through
                strategic marketing of the event and its activities in Kista,
                Stockholm, and Biskopsgården, Gothenburg.
              </p>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default CvPopup;

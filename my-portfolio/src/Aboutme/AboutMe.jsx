import React from "react";
import "./AboutMe.css";

function AboutMePopup({ onClose }) {
  return (
    <div className="aboutme-popup">
      <div className="aboutme-content">
        <img
          id="exit-icon"
          src="/images/Exit.svg"
          alt="exit icon"
          onClick={onClose}
        />
        <div className="Fatou-picture">
          <img id="Fatou" src="/images/IMG_1049.jpg" alt="Fatou Taal" />
        </div>
        <div className="info-about-me">
          <h2 className="headings-about">About Me</h2>
          <p>
            Hello! My name is Fatou
            <br></br>
            <br></br>I’m a Frontend Developer student at Hyper Island with a
            strong passion for design and creating user-friendly websites. My
            current skill set includes <strong>HTML</strong>,{" "}
            <strong>CSS</strong>,<strong>JavaScript</strong>, and{" "}
            <strong>React</strong>, and I’m actively expanding my knowledge in{" "}
            <strong>UI/UX design</strong> and other frameworks.
            <br />
            <br />
            I’m always eager to learn new technologies and improve my skills to
            stay ahead in this ever-evolving field.
            <br />
            <br />
            <strong>
              Right now, I’m looking for an internship opportunity
            </strong>{" "}
            where I can apply my skills, gain hands-on experience, and continue
            learning whether it’s deepening my expertise in frontend development
            or exploring new frameworks.
            <br />
            <br />I thrive in both independent and team environments. I can take
            the lead when needed, but I’m equally comfortable collaborating and
            contributing as part of a team.
            <br />
            <br />
            With a background in <strong>communication</strong> and{" "}
            <strong>project management</strong>, I’ve developed strong
            collaboration and leadership skills that have been invaluable in
            team projects during my studies. My experience also helps me think
            strategically about design, content, and user experience, ensuring
            that the websites I build are not only functional but also engaging
            and goal-oriented.
            <br />
            <br />
            Take a look at my projects, and feel free to reach out!
          </p>
          <div className="skills">
            <h2 className="headings-about">Technical Skills</h2>
            <img
              id="icons"
              src="/images/html-5-svgrepo-com.svg"
              alt="HTLM icon"
            />
            <img
              id="icons"
              src="/images/css-3-svgrepo-com.svg"
              alt="CSS icon"
            />
            <img
              id="icons"
              src="/images/javascript-svgrepo-com.svg"
              alt="JavaScript icon"
            />
            <img
              id="icons"
              src="/images/react-1-logo-svgrepo-com.svg"
              alt="React icon"
            />
            <img
              id="icons"
              src="/images/github-142-svgrepo-com.svg"
              alt="Github icon"
            />
            <img
              id="icons"
              src="/images/figma-svgrepo-com.svg"
              alt="Figma icon"
            />
            <div className="skills2">
              <h2 className="headings-about">
                Work Methodologies & Soft Skills
              </h2>
              <ul>
                <li>
                  <strong>Agile Methodologies (Scrum, Kanban)</strong> –
                  Experience working in agile teams.
                </li>
                <li>
                  <strong>Product Ownership</strong> – Involvement in product
                  development and prioritization.
                </li>
                <li>
                  <strong>Self-Management & Collaboration</strong> – Ability to
                  work independently and collaborate effectively.
                </li>
                <li>
                  <strong>Time Management & Planning</strong> – Strong
                  organizational and planning skills.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePopup;

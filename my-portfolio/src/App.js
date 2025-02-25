import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="portfolio-container">
      <div className="first-box">
        <h1>Fatou Taal</h1>
        <p className="role">Frontend Developer</p>
        <img
                className="fatou-icon"
                src="/images/Fatou.png"
                alt="Animation portrait"
              />
      </div>
      <div className="second-box">
        <div className="vertical-btn">
          <button className="btn" id="btn1">
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
      <footer>© 2025 Fatou Taal</footer>
    </div>
  );
}

export default App;

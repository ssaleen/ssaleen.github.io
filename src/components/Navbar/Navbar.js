import "./Navbar.css";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import { AiFillFilePdf, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Navbar({ handleModeChange, setMode }) {
  return (
    <section className=" container-navbar">
      <div className="navbar-left white-text">
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href="https://saleen.dev/resume.pdf">
              <AiFillFilePdf />&nbsp;
              <span className="link-decoration">Resume</span>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/saleenshahriar">
              <AiFillLinkedin />&nbsp;
              <span className="link-decoration">LinkedIn</span>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/ssaleen">
              <AiFillGithub />&nbsp;
              <span className="link-decoration">GitHub</span>
            </a>
          </li>
          {/* <li>
            <a href="#projects" >Works</a>
          </li> */
          /* <li>
            <a href="#about">Me</a>
          </li> */}
        </ul>
      </div>
      <button onClick={handleModeChange} className="container-icon">
        {setMode ? (
          <RiMoonFill className="mode-icon" />
        ) : (
          <RiSunFill className="mode-icon" />
        )}
      </button>
    </section>
  );
}

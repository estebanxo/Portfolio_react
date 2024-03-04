import "../../style/Skills.scss";
import OutilIcon from "../../assets/icons/outil.png";
import VSCodeIcon from "../../assets/icons/visual-studio-code.png";
import GitIcon from "../../assets/icons/git.png";
import GitHubIcon from "../../assets/icons/logo_github.png";
import WebpackIcon from "../../assets/icons/webpack.png";
import NpmIcon from "../../assets/icons/npm.png";
import SwaggerIcon from "../../assets/icons/swagger.png";
import PostmanIcon from "../../assets/icons/postman.png";
import ComputerIcon from "../../assets/icons/computer.png";
import HtmlCssIcon from "../../assets/icons/html_css.png";
import SassIcon from "../../assets/icons/sass.png";
import JsIcon from "../../assets/icons/js.webp";
import ReactIcon from "../../assets/icons/react.png";
import DataBaseIcon from "../../assets/icons/database.png";
import NodeIcon from "../../assets/icons/node.png";
import ExpressIcon from "../../assets/icons/express.png";
import MongoDBIcon from "../../assets/icons/mongodb.png";

function Skills() {
  return (
    <div id="skills">
      <h2>Compétences</h2>
      <div className="containerSkills">
        <div className="dropdown workSpace">
          <button id="btnWorkSpace" type="button">
            <img className="imgBtn" src={OutilIcon} alt="" />
            <span>Work Space</span>
          </button>
          <div className="content contentWorkSpace">
            <div className="containerSkill">
              <img src={VSCodeIcon} alt="" />
              <span>VS Code</span>
            </div>
            <div className="containerSkill">
              <img src={GitIcon} alt="" />
              <span>Git</span>
            </div>
            <div className="containerSkill">
              <img src={GitHubIcon} alt="" />
              <span>GitHub</span>
            </div>
            <div className="containerSkill">
              <img src={WebpackIcon} alt="" />
              <span>Webpack</span>
            </div>
            <div className="containerSkill">
              <img src={NpmIcon} alt="" />
              <span>NPM</span>
            </div>
            <div className="containerSkill">
              <img src={SwaggerIcon} alt="" />
              <span>Swagger</span>
            </div>
            <div className="containerSkill">
              <img src={PostmanIcon} alt="" />
              <span>Postman</span>
            </div>
          </div>
        </div>
        <div className="dropdown frontend">
          <button id="btnFrontend" type="button">
            <img className="imgBtn" src={ComputerIcon} alt="" />
            <span>Front-End</span>
          </button>
          <div className="content contentFrontend">
            <div className="containerSkill">
              <img src={HtmlCssIcon} alt="" />
              <span>HTML/CSS</span>
            </div>
            <div className="containerSkill">
              <img src={SassIcon} alt="" />
              <span>SASS</span>
            </div>
            <div className="containerSkill">
              <img src={JsIcon} alt="" />
              <span>JavaScript</span>
            </div>
            <div className="containerSkill">
              <img src={ReactIcon} alt="" />
              <span>React</span>
            </div>
          </div>
        </div>
        <div className="dropdown backend">
          <button id="btnBackend" type="button">
            <img className="imgBtn" src={DataBaseIcon} alt="" />
            <span>Back-End</span>
          </button>
          <div className="content contentBackend">
            <div className="containerSkill">
              <img src={NodeIcon} alt="" />
              <span>Node.js</span>
            </div>
            <div className="containerSkill">
              <img src={ExpressIcon} alt="" />
              <span>Express.js</span>
            </div>
            <div className="containerSkill">
              <img src={MongoDBIcon} alt="" />
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

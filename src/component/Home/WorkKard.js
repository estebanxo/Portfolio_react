import "../../style/WorkKard.scss";
import { NavLink } from "react-router-dom";
import KasaMockup from "../../assets/capture/kasa-mockup-1024x700-1.png";

function WorkKard() {
  return (
    <NavLink to={"/work"} className="containerCard containerCard1">
      <div className="hoverCard hoverCard1">
        <p>Voir plus</p>
      </div>
      <div className="left">
        <img src={KasaMockup} alt="" />
      </div>
      <div className="right">
        <div className="top">
          <h3 className="titleHover">Front-end du site Kasa</h3>
          <p>
            <strong>Année:</strong> 2023
          </p>
        </div>
        <div className="bottom">
          <p>
            <strong>Mission:</strong>
          </p>
          <p>
            Projet réalisé dans le cadre de ma formation OpenClassrooms de
            développeur web.
          </p>
          <p>
            Développement du front d’un site de location d’hébergement avec
            React.
          </p>
          <p>Création de composants React et gestion des états.</p>
        </div>
      </div>
    </NavLink>
  );
}

export default WorkKard;

import "../style/Footer.scss";
import GitHubIcon from "../assets/icons/logo_github.png";
import LinkedInIcon from "../assets/icons/logo_linkedin.png";
import MailIcon from "../assets/icons/logo_gmail.png";
import CVIcon from "../assets/icons/cv.png";
import CardIcon from "../assets/icons/carte_mentale.png";

function Footer() {
  return (
    <footer>
      <div className="containerImg">
        <div className="img">
          <a href="https://github.com/estebanxo">
            <img className="github" src={GitHubIcon} alt="" />
          </a>
        </div>
        <div className="img">
          <a href="https://www.linkedin.com/in/esteban-templier/">
            <img className="linkedIn" src={LinkedInIcon} alt="" />
          </a>
        </div>
        <div className="img">
          <a href="mailto:esteban.templier82@gmail.com">
            <img className="gmail" src={MailIcon} alt="" />
          </a>
        </div>
        <div className="img">
          <a href="./assets/docs/CV_Esteban_Templier.pdf">
            <img className="cv" src={CVIcon} alt="" />
          </a>
        </div>
        <div className="img">
          <a href="https://miro.com/app/board/uXjVNemiv60=/?share_link_id=469772213665">
            <img className="carteMentale" src={CardIcon} alt="" />
          </a>
        </div>
      </div>
      <p className="auteur">Réalisé par Esteban TEMPLIER</p>
    </footer>
  );
}

export default Footer;

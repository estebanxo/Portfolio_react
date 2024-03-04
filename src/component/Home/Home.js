import "../../style/Home.scss";
import Header from "../Header";
import Skills from "./Skills";
import WorkKard from "./WorkKard";
import Footer from "../Footer";
import ImgIntroduction from "../../assets/metier-developpeur-web.jpg";

function Home() {
  return (
    <div>
      <Header
        href1={"#introduction1"}
        title1={"A Propos"}
        href2={"#compétences1"}
        title2={"Mes Compétences"}
        href3={"#mesTravaux"}
        title3={"Mes Travaux"}
      />
      <main>
        <div id="introduction1"></div>
        <div id="introduction">
          <div className="imgIntro">
            <img src={ImgIntroduction} alt="" />
          </div>
          <article>
            <h2>Esteban TEMPLIER</h2>
            <p>
              Après ma formation de développeur web chez OpenClassrooms et
              l'obtention de mon diplôme, je suis à la recherche d’une
              alternance.
            </p>
            <p>
              Suite à cette formation, j’ai acquis le sens de l’adaptation, de
              l’initiative, de l’autonomie, et je saurai mettre en application
              rapidement les missions qui me seront confiée.
            </p>
            <p id="compétences1">
              Je construis ce projet depuis près de deux ans maintenant et je
              sais aujourd’hui qu’exercer ce métier me permettra de m’épanouir
              pleinement.
            </p>
          </article>
        </div>
        <Skills />
        <div id="mesTravaux">
          <h2>Réalisations</h2>
          <div className="cards">
            <WorkKard />
            <WorkKard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;

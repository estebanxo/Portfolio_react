import "../../style/Description.scss";

function Description(props) {
    return(
        <div class="container">
          <img class="imgProjet" src="../assets/capture/kasa-mockup-1024x700-1.png" alt=""/>
          <div class="containerDescription">
            <div class="top">
              <div id="topDescription"></div>
              <h3 class="titleHover">Front-end du site Kasa</h3>
              <p><strong>Année:</strong> 2023</p>
            </div>
            <div class="bottom">
              <p><strong>Mission:</strong></p>
              <p>Projet réalisé dans le cadre de ma formation OpenClassrooms de développeur web.</p>
              <p>Développement du front d’un site de location d’hébergement avec React.</p>
              <p>Création de composants React et gestion des états.</p>
              <p><strong>Les Défis du projet:</strong></p>
              <p>Création de l’application avec Create React App.</p>
              <p>Stockage et récupération des données avec le state et les effets.</p>
              <p>Mise en place du Routing avec React Router.</p>
              <p>Mise en place des composants React.</p>
              <p>Mon approche <strong class="atout">méthodique</strong>, mon <strong class="atout">organisation</strong> et mon <strong class="atout">sens de l'écoute</strong> vis à vis de mon mentor mon permis de surmonter ces défis.</p>
              <div class="techno">
                <p><strong>Technologies utilisées</strong></p>
                <ul class="ulTechno">
                  <li>HTML</li>
                  <li>SASS</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Description;
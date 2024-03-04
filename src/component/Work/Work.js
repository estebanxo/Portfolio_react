import { useEffect } from "react";
import "../../style/Work.scss";
import Header from "../Header";
import Description from "./Description";
import { useParams } from "react-router-dom";
import { useNavigate  } from "react-router-dom";

function Work() {
  const navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    const kasa = params.id;
    console.log(kasa);

    if (kasa != "kasa") {
      navigate("/404");
    }
  },[params.id, navigate]);

  return (
    <div>
      <Header
        href1={"/"}
        title1={"Accueil"}
        href2={"#topDescription"}
        title2={"Description"}
        href3={"#screenShot"}
        title3={"Capture d'écran"}
      />
      <main class="main">
        <Description />
        <div class="containerLinkCode">
            <a class="linkCode" href="https://github.com/estebanxo/P6">Voir le code</a>
        </div>
        <div class="screenShotContainer">
            <div id="screenShot"></div>
            <img id="kasa1" src="../assets/capture/FireShot1_Kasa.png" alt=""/>
            <img id="kasa2" src="../assets/capture/FireShot2_Kasa.png" alt=""/>
            <img id="kasa3" src="../assets/capture/FireShot3_Kasa.png" alt=""/>
            <img id="kasa4" src="../assets/capture/FireShot4_Kasa.png" alt=""/>
        </div>
      </main>
    </div>
  );
}

export default Work;

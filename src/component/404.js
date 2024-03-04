import "../style/404.scss";
import Header from "./Header";

function Error() {
    return(
        <div>
            <Header
                href1={"/"}
                title1={"Accueil"}
                href2={"#topDescription"}
                title2={"Description"}
                href3={"#screenShot"}
                title3={"Capture d'écran"}
            />
        </div>
    );
}

export default Error;
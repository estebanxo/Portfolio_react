import "../../style/WorkKard.scss";
import { NavLink } from "react-router-dom";

function WorkKard(props) {
  return (
    <NavLink to={`/work/${props.id}`} className="containerCard containerCard1">
      <div className="hoverCard hoverCard1">
        <p>Voir plus</p>
      </div>
      <div className="left">
        <img src={props.img} alt="" />
      </div>
      <div className="right">
        <div className="top">
          <h3 className="titleHover">{props.title}</h3>
          <p>
            <strong>Année:</strong> {props.years}
          </p>
        </div>
        <div className="bottom">
          <p>  <strong> Mission: </strong>  </p>
          <p>  {props.missionp1}  </p>
          <p>  {props.missionp2}  </p>
          <p>  {props.missionp3}  </p>
        </div>
      </div>
    </NavLink>
  );
}

export default WorkKard;

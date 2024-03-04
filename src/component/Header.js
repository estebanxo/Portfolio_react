import "../style/Header.scss";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Header(props) {
  const [routeFound, setRouteFound] = useState(false);

  let routeSearched = window.location.pathname;
  console.log(routeSearched);

  const namelocationRoute = (routeFoundNow) => {
    if (routeFoundNow === "/") {
      console.log(routeSearched);
      setRouteFound(!routeFound);
    } else {
      setRouteFound(routeFound);
    }
  };
  useEffect(() => {
    namelocationRoute(routeSearched);
  }, []);

  return (
    <header className="navBar">
      <h1>
        Esteban TEMPLIER <span>Développeur Web</span>
      </h1>
      <nav className="nav">
        <ul>
          <li>
            {routeFound === true ? (
              <a href={props.href1}>{props.title1}</a>
            ) : (
              <NavLink to={props.href1}>{props.title1}</NavLink>
            )}
          </li>
          <li>
            {" "}
            <a href={props.href2}>{props.title2}</a>{" "}
          </li>
          <li>
            {" "}
            <a href={props.href3}>{props.title3}</a>{" "}
          </li>
        </ul>
        <div id="icon"></div>
      </nav>
    </header>
  );
}

export default Header;

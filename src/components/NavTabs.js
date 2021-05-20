import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

const styles = {
    title: {
      fontSize: "1.5rem",
      marginLeft: "1rem",
      display: "flex",
      alignItems: "center"
    }
  }

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item" style={styles.title}>
          Pupster
      </li>
      <li className="nav-item">
        <Link to="/about" className={location.pathname === "/about" || location.pathname === "/" ? "nav-link active" : "nav-link"}>
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/discover" className={location.pathname === "/discover" ? "nav-link active" : "nav-link"}>
          Discover
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/search" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>
          search
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;

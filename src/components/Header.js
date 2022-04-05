import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <h1>
        <Link to="/">TOEIC ENGLISH</Link>
      </h1>
      <div className="menu">
        <Link to="/create" className="link">
          WORD ADD
        </Link>
        <Link to="/dayadd" className="link">
          DAY ADD
        </Link>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";

function Empty(props) {
  return (
    <>
      <h2>404 ERROR</h2>
      <Link to="/">BACK</Link>
    </>
  );
}

export default Empty;

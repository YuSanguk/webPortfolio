import React from "react";
import { Link } from "react-router-dom";
import { NavigatorBar } from "../Style/ComponentStyle";

const Navigator = () => {
  return (
    <NavigatorBar>
      <div>Logo</div>
      <>
        <Link to="/">HOME</Link>
        <Link to="/works">WORKS</Link>
        <Link to="/info">INFO</Link>
      </>
    </NavigatorBar>
  );
};

export default Navigator;

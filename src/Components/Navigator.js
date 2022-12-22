import React from "react";
import { useLocation } from "react-router-dom";

import {
  NavigatorElement,
  NavigatorBar,
  NavigatorElements,
} from "../Style/ComponentStyle";

const Navigator = () => {
  const { pathname } = useLocation();
  return (
    <NavigatorBar>
      <div>Logo</div>
      <NavigatorElements>
        <NavigatorElement
          isactive={pathname === "/" ? "true" : "false"}
          to="/"
          text="HOME"
        />
        <NavigatorElement
          isactive={pathname === "/works" ? "true" : "false"}
          to="/works"
          text="WORKS"
        />
        <NavigatorElement
          isactive={pathname === "/info" ? "true" : "false"}
          to="/info"
          text="INFO"
        />
      </NavigatorElements>
    </NavigatorBar>
  );
};

export default Navigator;

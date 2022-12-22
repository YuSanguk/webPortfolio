import React from "react";
import { useLocation } from "react-router-dom";

import Logo from "./Logo";
import {
  NavigatorElement,
  NavigatorBar,
  NavigatorElements,
} from "../Style/NavigatorStyle";

const Navigator = () => {
  const { pathname } = useLocation();
  return (
    <NavigatorBar>
      <Logo />
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

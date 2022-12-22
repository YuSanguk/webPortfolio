import React, { useState } from "react";

import { Txt } from "../Style/LandingStyle";

const Text = ({ t }) => {
  const [active, setActive] = useState(false);

  const inMouse = () => {
    if (active === false) {
      setActive(true);
      setTimeout(() => {
        setActive(false);
      }, 2000);
    }
  };

  return (
    <Txt isactive={active ? "true" : "false"} onMouseEnter={inMouse}>
      {t}
    </Txt>
  );
};

export default Text;

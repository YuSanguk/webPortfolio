import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Landing from "./Routes/Landing";
import Works from "./Routes/Works";
import Info from "./Routes/Info";
import Error from "./Routes/Error";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/works" element={<Works />} />
        <Route path="/info" element={<Info />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;

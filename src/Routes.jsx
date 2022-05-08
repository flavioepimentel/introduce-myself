import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Sobre from "./pages/Sobre";


function AppRoutes() {
  return (
    <Routes>
      <Route path={"/"} component={Home} exact />
      <Route path="/works" component={Works} exact />
      <Route path="/sobre" component={Sobre} exact />
    </Routes>
  );
}

export default AppRoutes;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path={"/"} component={Home} exact></Route>
    </Routes>
  );
}

export default AppRoutes;

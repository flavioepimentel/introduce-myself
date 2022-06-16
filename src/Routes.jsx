import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Sobre from "./pages/Sobre";

function AppRoutes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="works" element={<Works />} exact />
        <Route path="sobre" element={<Sobre />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

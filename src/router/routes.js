import React from 'react';
import { Routes, Route } from "react-router-dom";
// components
import Anime from "../components/Anime";
import Home from "../components/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="anime/:slug" element={<Anime />} />
    </Routes>
  )
}

export default Router;

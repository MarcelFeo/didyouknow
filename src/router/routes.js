import React from 'react';
import { Routes, Route } from "react-router-dom";
// components
import Anime from "../components/Anime";
import Home from "../components/Home";

const Router = () => {
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="anime" element={<Anime />} />
    </Routes>
}

export default Router;

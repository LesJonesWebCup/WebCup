import {
  HashRouter as Routes,
  Route,
  } from 'react-router-dom';
import React from "react";
import Home from "./Components/home/Home"
import About from "./Components/about/About"

import "./Components/navbar/Navbar.css"
import './App.css';

function App() {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="quoicouvre" element={<About />} />
        </Routes>
  )
}

export default App;
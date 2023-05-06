import {
  HashRouter as Router,
  Route,
  } from 'react-router-dom';
import React from "react";
import Home from "./Components/home/Home"
import About from "./Components/about/About"

import "./Components/navbar/Navbar.css"
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="quoicouvre" component={About} />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
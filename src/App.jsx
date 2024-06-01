import "./App.css";

import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Navber from "./components/Navber";

// import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navber />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

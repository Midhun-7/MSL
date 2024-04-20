import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css"; // Import your CSS file for styling

import Home from "./Home"; 
import Converter from "./Converter";
import Dictionary from "./Dictionary";
import Translator from "./Translator";
import ContactPage from "./ContactPage";
import Login from "./Login";

const App = () => {
  return (
    <Router>
      <div>
        {/* Header */}
        <header>
          <nav className="navbar">
            <ul className="nav-links">
              <h1 className="heading">NISH</h1>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/converter">Converter</Link>
              </li>
              <li>
                <Link to="/dictionary">Dictionary</Link>
              </li>
              <li>
                <Link to="/translator">Translator</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li className="login">
                <a href="/login">
                  <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="Logo" />
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/converter" element={<Converter />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/translator" element={<Translator />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

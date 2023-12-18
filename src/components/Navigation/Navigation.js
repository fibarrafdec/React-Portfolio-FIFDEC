// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import the styles

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link className="Link" to="/">About Me</Link>
      <Link className="Link" to="/portfolio">Portfolio</Link>
      <Link className="Link" to="/contact">Contact</Link>
      <Link className="Link" to="/resume">Resume</Link>
    </nav>
  );
};

export default Navigation;

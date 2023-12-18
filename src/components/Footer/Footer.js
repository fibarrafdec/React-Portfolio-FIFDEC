import React from 'react';
import './Footer.css';

import githubIcon from '../Footer/images/GitHub.png'; // Correct path
import twitterIcon from '../Footer/images/X.webp'; // Correct path
import facebookIcon from '../Footer/images/Facebook.png'; // Correct path
import linkedinIcon from '../Footer/images/linkedin.png'; // Correct path
import instagramIcon from '../Footer/images/Instagram.avif'; // Correct path

const Footer = () => {
  return (
    <footer>
      <h3>Follow Me</h3>
      <div className="social-icons">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" />
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

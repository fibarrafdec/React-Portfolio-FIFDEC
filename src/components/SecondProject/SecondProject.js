import React from 'react';
import './Project.css';
import secondProjectImage from '../../images/Pawfect-Match.png'; // Replace with the actual path

const SecondProject = () => {
  const deployLink = 'https://pawfectmatch-1aca1a9b79f8.herokuapp.com/';
  const githubLink = 'https://github.com/bhansi/Pawfect-Match';
  const title = 'Pawfect Match';

  return (
    <div className="project">
      <img src={secondProjectImage} alt={`${title} Preview`} />
      <h3>{title}</h3>
      <a href={deployLink} target="_blank" rel="noopener noreferrer">
        Deployed App
      </a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>
    </div>
  );
};

export default SecondProject;

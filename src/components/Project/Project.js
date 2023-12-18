import React from 'react';
import './Project.css';
import ProjectImage from '../../images/Weather-Comparison.png'; // Replace with the actual path

const Project = () => {
  const deployLink = 'https://azukicoconut.github.io/ProjectBagEnd';
  const githubLink = 'https://github.com/AzukiCoconut/ProjectBagEnd';
  const title = 'Weather Comparison';

  return (
    <div className="project">
      <img src={ProjectImage} alt={`${title} Preview`} />
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

export default Project;

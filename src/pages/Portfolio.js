// Portfolio.js
import React from 'react';
import Project from '../components/Project/Project';
import SecondProject from '../components/SecondProject/SecondProject';

const Portfolio = () => {
  const h2Styles = {
    color: 'beige',
    marginLeft: '60px',
  };

  const projects = [
    {
      title: 'Weather Comparison',
      image: '../../images/Weather-Comparison.png',
      deployLink: 'https://azukicoconut.github.io/ProjectBagEnd',
      githubLink: 'https://github.com/AzukiCoconut/ProjectBagEnd',
    },
    {
      title: 'Pawfect Match',
      image: '../../images/Pawfect-Match.png',
      deployLink: 'https://pawfectmatch-1aca1a9b79f8.herokuapp.com/',
      githubLink: 'https://github.com/bhansi/Pawfect-Match',
    },
  ];

  return (
    <div>
      <h2 style={h2Styles}>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          // Render the appropriate component based on the project
          // You can use a conditional statement here if you have more projects in the future
          project.title === 'Weather Comparison' ? (
            <Project key={index} {...project} />
          ) : (
            <SecondProject key={index} {...project} />
          )
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

// Resume.js
import React from 'react';
import resumeImage1 from '../images/Resume1.png'; // Replace with the actual path
import resumeImage2 from '../images/Resume2.png'; // Replace with the actual path

const Resume = () => {
  const containerStyles = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyles = {
    fontSize: '24px',
    color: 'beige',
    marginBottom: '30px',
    marginLeft: '60px',
  };

  const linkStyles = {
    color: 'beige',
    textDecoration: 'none',
    marginRight: '10px',
    marginLeft: '60px',
  };

  const imageContainerStyles = {
    display: 'flex',
    flexDirection: 'column', // Display images in a column
    alignItems: 'center', // Center images horizontally
    marginTop: '20px',
  };

  const imageStyles = {
    maxWidth: '65%',
    height: 'auto',
    marginBottom: '40px', // Space between images
    borderRadius: '30px', // Rounded border
    boxShadow: 'rgba(0, 0, 0, 0.55) 0px 5px 15px',
  };

  return (
    <div style={containerStyles}>
      <h2 style={headingStyles}>Resume</h2>
      <a href="https://fibarrafdec.github.io/Coming-Soon/" style={linkStyles} target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>
      
      <div style={imageContainerStyles}>
        <img src={resumeImage1} alt="Resume 1" style={imageStyles} />
        <img src={resumeImage2} alt="Resume 2" style={imageStyles} />
      </div>
    </div>
  );
};

export default Resume;

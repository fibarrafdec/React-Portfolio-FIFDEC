import React from 'react';
import myImage from '../images/Fernando.jpg'; 

const AboutMe = () => {
  const aboutMeStyles = {
    color: 'beige',
    fontSize: '24px',
    marginLeft: '60px',
  };

  const imageStyles = {
    display: 'block',
    margin: '0 auto', 
    marginTop: '90px',
    marginBottom: '90px',
    borderRadius: '50%', 
    width: '250px', 
    height: '250px', 
    objectFit: 'cover', 
    boxShadow: 'rgba(0, 0, 0, 0.55) 0px 5px 15px', 
  };

  const paragraphStyles = {
    color: 'beige',
    backgroundColor: '#1c77ac',
    fontSize: '18px',
    lineHeight: '1.5',
    marginBottom: '90px',
    marginLeft: '100px',
    marginRight: '100px', 
    padding: '30px',
    margin: '30px',
    borderRadius: '30px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  };

  return (
    <div>
      <img src={myImage} alt="My Avatar" style={imageStyles} />
      <h2 style={aboutMeStyles}>About Me</h2>
      <p style={paragraphStyles}>
        I am a passionate and detail-oriented full-stack web developer with a strong foundation
        in both front-end and back-end technologies. My journey in web development started with
        a fascination for creating engaging user interfaces, and it has evolved into a comprehensive
        skill set that covers everything from crafting pixel-perfect layouts to building robust
        server-side logic.
      </p>
    </div>
  );
};

export default AboutMe;

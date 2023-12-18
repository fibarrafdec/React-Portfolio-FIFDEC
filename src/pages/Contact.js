import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [buttonStyles, setButtonStyles] = useState({
    width: '100px',
    padding: '10px 20px',
    backgroundColor: '#1c77ac',
    color: '#edf7f6',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    margin: '5px',
    transition: 'background-color 0.3s',
  });

  const inputStyles = {
    padding: '10px',
    width: '300px',
    borderRadius: '20px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    margin: '10px',
    marginBottom: '25px',
    backgroundColor: 'white',
  };

  const textareaStyles = {
    padding: '10px',
    width: '300px',
    height: '100px',
    borderRadius: '20px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    margin: '10px',
    marginBottom: '25px',
    backgroundColor: 'white',
  };

  const h2Styles = {
    color: 'beige',
    marginLeft: '60px',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2 style={h2Styles}>Contact</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyles}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyles}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={textareaStyles}
          required
        ></textarea>

        {/* Submit button */}
        <button
          type="submit"
          style={buttonStyles}
          onMouseOver={() => setButtonStyles({ ...buttonStyles, backgroundColor: '#076094' })}
          onMouseOut={() => setButtonStyles({ ...buttonStyles, backgroundColor: '#1c77ac' })}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

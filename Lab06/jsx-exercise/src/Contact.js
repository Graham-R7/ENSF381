import React from 'react';

function Contact({ title, description }) {
  return (
    <div className="App">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Contact;

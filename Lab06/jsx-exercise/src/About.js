import React from 'react';

function About({ title, description }) {
  return (
    <div className="App">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default About;

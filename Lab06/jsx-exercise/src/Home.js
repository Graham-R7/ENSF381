import React from 'react';

function Home({ title, description }) {
  return (
    <div className="App">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Home;

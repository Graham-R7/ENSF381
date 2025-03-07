import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import EngineeringTopics from './EngineeringTopics';

function App() {
  const currentYear = new Date().getFullYear();
  const isLoggedIn = true;

  return (
    <div className="App">
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
      <Home/>
      <About/>
      <Contact/>
      <EngineeringTopics />
    </div>
  );
}

export default App;


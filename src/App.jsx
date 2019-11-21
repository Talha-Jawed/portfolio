import React from 'react';
import './App.css';
import Header from './component/Header'
import Skill from './component/Skill';
import About from './component/About';
import Social from './component/Social';

function App() {
  return (
    <div className='main'>
      <Social />
      <Header />
      <Skill />
      <About />
    </div>
  );
}

export default App;

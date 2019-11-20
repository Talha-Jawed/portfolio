import React from 'react';
import './App.css';
import Header from './component/Header'
import Skill from './component/Skill';
import About from './component/About';

function App() {
  return (
    <div className='main'>
      <Header />
      <Skill />
      <About />
    </div>
  );
}

export default App;

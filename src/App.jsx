import React from 'react';
import './App.css';
import Header from './component/Header';
import Skill from './component/Skill';
import About from './component/About';
import Social from './component/Social';
import GithubRepoCard from './component/Projects';
import Achievements from './component/Achievements';
import Contact from './component/Contact';

function App() {
  return (
    <div className='main'>
      <Social />
      <a id='#'>
        <Header />
      </a>
      <a id='Skill'>
        <Skill />
      </a>
      <a id='About'>
        <About />
      </a>
      <a id='openSource'>
        <GithubRepoCard />
      </a>
      <a id="Achievement">
        <Achievements />
      </a>
      <a id="Contact">
        <Contact />
      </a>
    </div>
  );
}

export default App;

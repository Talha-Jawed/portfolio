import React from 'react';
import './App.css';
import Header from './component/Header'
import Skill from './component/Skill';
import About from './component/About';
import Social from './component/Social';
import GithubRepoCard from './component/Projects';
import Achievements from './component/Achievements';

function App() {
  return (
    <div className='main'>
      <Social />
      <Header />
      <Skill />
      <About />
      <GithubRepoCard />
      <Achievements />
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/header/Header'
import "./App.css";
import Home from './components/home/Home';

import Skills from './components/Skills/Skills.jsx';

import Contact from './components/Contact/Contact'

import Project from './components/Projects/Project';
import Qualification1 from './components/qualification/Qualification1.jsx';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <Skills />
        <Project />
        <Qualification1 />
        <Contact />

      </main>
    </>
  )
}

export default App;
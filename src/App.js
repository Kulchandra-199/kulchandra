import React from 'react';
import Header from './components/header/Header'
import "./App.css";
import Home from './components/home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills.jsx';
import Qualification from './components/qualification/Qualification';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App;
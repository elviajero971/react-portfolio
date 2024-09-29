import React from 'react';
import './App.scss';
import NavBar from '../NavBar/NavBar';
import LandingPage from "../LandingPage/LandingPage";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Experiences from "../Experiences/Experiences";
import Projects from "../Projects/Projects";
import Educations from "../Educations/Educations";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import '../../scss/_layout.scss';
import '../../scss/_theme.scss';

const App: React.FC = () => {
  return (
      <div className="app">
        <NavBar />
        <LandingPage />
        <About />
        <Skills />
        <Experiences />
        <Projects />
        <Educations />
        <Contact />
        <Footer />
      </div>
  );
};

export default App;
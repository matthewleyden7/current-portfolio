import React, { useState, useEffect } from "react";
import About from "./components/About";
import Accordion from "./components/Accordion";
import AudioPlayer from "./components/AudioPlayer";
import Nav from "./components/Nav";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from './model/Contact'

 

export default function App() {



  return (
    <main className="text-gray-400 bg-gradient-to-b bg-slate-800 body-font">
    
      <NavBar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      

    </main>
  );
}

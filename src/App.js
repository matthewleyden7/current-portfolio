import React from "react"
import About from "./components/About"
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './model/Contact'
import LaptopPic from './images/laptop_pic.jpg'





export default function App() {



  return (
    <div className="bg-slate-800 w-full h-fit">
      <NavBar />
      <About />
      <Skills />
      <Projects />
      <img src={LaptopPic} alt="" className="w-full h-[300px] lg:h-[350px] xl:h-[450px] 2xl:h-[500px]" />
      <Contact />

    </div>
  );
}

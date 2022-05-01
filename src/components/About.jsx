import React, { useState} from "react";
import { motion } from 'framer-motion'
import SelfPortrait from '../images/self.jpg'
import FlashyText from "./FlashyText";
import CoolBackground from '../images/cool_background2.jpg'

export default function About() {
 
  
  return (
    <section id="about" className="bg-slate-800 z-50">
      <div className="container bg-slate-800 h-screen mx-auto flex px-10 py-10 md:flex-row flex-col items-center z-50 ">
  
        <div className="lg:flex md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <FlashyText script="Hey, I'm Matt. Welcome to my portfolio." />
          
 
          <p className="mb-8 leading-relaxed">
            Originally and always a Python developer. Full-stack web developer. I absolutely enjoy the ease and speed of creating a
            React responsive design. Looking forward to creating many projects in the future. Always improving and always learning.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
          
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="brightness-100"
            alt="This is a picture of the dude that made this site."
            src={SelfPortrait}
          />
        </div>
        

      </div>
    </section>
  );
}
import React, { useState, useEffect } from "react";
import { useRef } from "react";

export default function Navbar() {
  const ref = useRef(null);



  useEffect(() => {
    setTimeout(() => {
      ref.current.click();
    }, 10); //miliseconds
  }, []);
  

  return (
    <header className="bg-slate-800 w-full lg:sticky md:sticky top-0 z-50">
      <div className="container bg-slate-800 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a ref={ref} href="#about" className="ml-3 text-xl hover:text-[#01E08F]">
            Matthew Leyden
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
       
          <a href="#skills" className="mr-5 font-medium text-[18px] rounded-full p-1.5
          text-[#FFFFFF] hover:text-[#01E08F] hover:ring-1 hover:ring-[#01E08F] duration-1000">
            <h4>Skills</h4>
          </a>
          <a
          href="#projects"
          className="mr-5 font-medium text-[18px] rounded-full p-1.5
          text-[#FFFFFF] hover:text-[#01E08F] hover:ring-1 hover:ring-[#01E08F] duration-1000">
            Projects
          </a>
          <a href="#contact" className="mr-5 font-medium text-[18px] rounded-full p-1.5
           text-[#FFFFFF] hover:text-[#01E08F] hover:ring-1 hover:ring-[#01E08F] duration-1000">
            Contact
          </a>
        </nav>
        
      </div>
    </header>
  );
}

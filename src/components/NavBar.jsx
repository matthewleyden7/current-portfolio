import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true)
  


  return (
    <header className={show === true ? "bg-transparent w-full bg-grey-800 lg:sticky md:sticky top-0 z-0" : "invisible"}>
      <div className={show === true ? "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" : "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-left"}>
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Matthew Leyden
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
       
          <a href="#skills" className="mr-5 hover:text-white">
            <h4>Skills</h4>
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#contact" className="mr-5 hover:text-white">
            Contact
          </a>
        </nav>
        
      </div>
    </header>
  );
}

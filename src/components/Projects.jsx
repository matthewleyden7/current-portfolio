import { CodeIcon } from "@heroicons/react/solid";
import { AnimatePresence, MotionConfig } from "framer-motion";
import React, { useState, useEffect } from "react";
import { projects } from "../data";
import FlashyText from "./FlashyText";
import { motion } from 'framer-motion'
import AudioPlayer from './AudioPlayer'
import ProjectCarousel from "./ProjectCarousel";



export default function Projects() {

  const [showPopup, setShowPopup] = useState(false)
  const [selected, setSelected] = useState({})

  const handleClick = (currProject) => {
    setShowPopup(!showPopup)

    console.log("showPopup", showPopup)

    setSelected(currProject)

  }

  return (


    <section id="projects" >
      
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 h-fit-content">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            <FlashyText script="Applications I have constructed." centered={true} />
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base justify-center">
            "I don't like to define myself by the work I've done... I define myself 
            by the work I want to do."
          </p>
        </div>
        
        <div className="container h-fit border-2 border-blue-500 mx-auto flex flex-wrap -m-4">
        <AnimatePresence>
          {showPopup &&  
            <motion.div
            initial={{ height: '0px', opacity: 0}}
            animate={{ height: "fit-content", opacity: 1}}
            transition={{ duration: 1}}
            exit={{ height: "0px"}}
            className="
                      container
                      overflow-auto
                      box-border w-5/6
                        z-30
                        mx-auto
                        bg-slate-800
                        p-6
                        rounded-bl-xl
                        rounded-br-xl
                        flex
                        flex-col
                        space-y-4
                        overflow-y-hidden
               
                        sticky 
                        justify-center "
                        
          >
          <img src={selected.giffy} alt='' />
          
        <h1 className="title-font text-lg font-medium text-white mb-3">
          {selected.title}
        </h1>
          <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1 ">{selected.description}</h2>
          <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
          {selected.subtitle}
          </h2>
          {selected.music !== [] ? <AudioPlayer music={selected.music} /> : ""}
          <button onClick={handleClick} className="rounded-md bg-blue-500 text-black">Close</button>
          </motion.div>
          }
          </AnimatePresence>
          <ProjectCarousel projects={projects} />
        </div>
      </div>
    </section>
  )
}

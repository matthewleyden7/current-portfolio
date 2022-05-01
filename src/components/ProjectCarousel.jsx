import React, { useEffect, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import "./styles.css";
import ArrowButton from "./ArrowButton";
import LeftArrowPoint from '../images/l_arrow.png'
import RightArrowPoint from '../images/r_arrow.png'
import AudioPlayer from './AudioPlayer'
import { motion, AnimatePresence } from 'framer-motion'



const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1, pagination: false },
 
  { width: 500, itemsToShow: 2, itemsToScroll: 2, pagination: false },

  { width: 1000, itemsToShow: 3, itemsToScroll: 3, pagination: false },

  { width: 1500, itemsToShow: 4, itemsToScroll: 4, pagination: false },
];



const ProjectCarousel = ({ projects }) => {
  const [showPopup, setShowPopup] = useState(false)
  const [selected, setSelected] = useState({})

  const handleClick = (currProject) => {
    setShowPopup(!showPopup)

    console.log("showPopup", showPopup)

    setSelected(currProject)

  }

      
return (
    
    <div className="carousel-c">
    <AnimatePresence>
    {showPopup &&  
      <motion.div
      initial={{ height: '0px'}}
      animate={{ height: "fit-content"}}
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
        <Carousel 
        renderArrow={({ type, onClick }) => {
            const pointer = type === consts.PREV ? <ArrowButton ArrowPic={LeftArrowPoint} /> : <ArrowButton ArrowPic={RightArrowPoint} />
            const direction = type === consts.PREV ? -1 : 1
            return <div onClick={onClick} className="bg-slate-800 h-full flex items-center">{pointer}</div>
        }}
        
        breakPoints={breakPoints}>
      
        {projects.map((project, idx) => {
          
          return (
          <div
           
            key={idx}
            className="w-full py-2 h-50 p-4 z-0 justify-between">
            {project.map((item, idx2) => {
              return (<div key={item.image} className="flex relative h-50">
              <img
                
                alt="gallery"
                className="absolute inset-0 w-full h-full p-5 object-cover object-center"
                src={item.image}
              />
              <div onClick={() => handleClick(item)} className="px-5 py-5 h-80 z-10 w-full cursor-pointer border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
             
                <p className="leading-relaxed">
                <h4 className="text-green-900 font-semibold text-center justify-center">{item.title}</h4>
                Click to view</p>
              </div>
            </div>

              
            )})}
         
          </div>
        )})}
        </Carousel>
    </div>)
        }
    

export default ProjectCarousel;
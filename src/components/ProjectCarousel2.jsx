import React, { useEffect, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import "./styles.css";
import AudioPlayer from './AudioPlayer'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectsIcon from '../images/project_icon.png'

import { GiEnergyArrow } from 'react-icons/gi'
import FlashyText4 from './FlashyText4'





const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1, pagination: false },
 
  { width: 500, itemsToShow: 2, itemsToScroll: 1, pagination: false },

  { width: 1000, itemsToShow: 3, itemsToScroll: 1, pagination: false },

  { width: 1500, itemsToShow: 4, itemsToScroll: 1, pagination: false },
];



const ProjectCarousel2 = ({ projects }) => {

  const [selected, setSelected] = useState({})
  const [currIdx, setcurrIdx] = useState(-1)
  const [prevIdx, setprevIdx] = useState(-1)


  const handleClick = (currProject, idx) => {

    setSelected(currProject)
    setprevIdx(currIdx)
    setcurrIdx(idx)



  }

      
return (
    
    <div
    
    className="carousel-c">
  


        <Carousel
      
        renderArrow={({ type, onClick }) => {
            const pointer = type === consts.PREV ?  
            <GiEnergyArrow className="text-white text-xl rotate-[135deg] ring-[0.5px] ml10 ring-white 
            rounded-full p-2 h-10 w-10 hover:cursor-pointer hover:text-[#01E08F] duration-300
            hover:ring-4 hover:ring-[#01E08F]"/> : 
            <GiEnergyArrow className="text-white text-xl rotate-[-45deg] mr-10 ring-[0.5px] ring-white 
            rounded-full p-2 h-10 w-10 hover:cursor-pointer hover:text-[#01E08F] duration-300
            hover:ring-4 hover:ring-[#01E08F]"/>
            const direction = type === consts.PREV ? -1 : 1
            return <div onClick={onClick} className="bg-slate-800 h-full flex items-center">{pointer}</div>
        }}
        
        breakPoints={breakPoints}
        >

        {projects.map((project, idx) => (
            
          <div key={idx} className="flex relative h-64 w-80">

             
          <img
      
            className={`absolute inset-0 w-full h-full p-2 rounded-xl object-cover object-center ${idx === currIdx && "shadow-2xl shadow-blue-500"}`}
            src={project.image}
          />
       
        
          <div onClick={() => handleClick(project, idx)} className="px-5 py-5 h-80 z-10 w-full cursor-pointer border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
         
            
            <h4 className="text-green-900 font-semibold text-center justify-center">{project.title}</h4>
            <p className="text-green-900 font-semibold text-center justify-center ">
            Click to view</p>
          </div>
        </div>




))}
        



  
        </Carousel>



        

        {currIdx === -1 && (
          <motion.div 
          initial={{ opacity: 0, x: "-500px", height: 0}}
          animate={{ opacity: 1, x: 0 , height: "full"}}
          transition={{ duration: 0.25, ease: [0.61, 1, 0.88, 1]}}
          exit={{ opacity: 0, x: "-500px", height: 0}}
          className="w-full h-screen bg-white flex">
            
    
        <div className="flex flex-col items-center justify-center h-fit w-full mt-20">
        <img src={ProjectsIcon} alt="" className="mx-auto text-transparent inline-block w-32 mb-4" />
        <h1 className="flex flex-col justify-center items-center sm:text-4xl text-3xl font-medium title-font 
        mb-4 text-white ">
          <FlashyText4 script="Applications I have created" centered={true} />
          <span className=" w-3/4 flex flex-wrap text-center h-fit">
          <h2 className="text-xl font-semibold text-gray-300">Click on any of the images on the carousel above to see a more detailed explanation
          about the project.</h2>
        </span>
        </h1>

       
 
      </div>
          </motion.div>
        )}

        
        <AnimatePresence>
        {currIdx === 0 && (
          
          <motion.div 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "1000px" : "-1000px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.25, delay: 0.25, ease: [0.61, 1, 0.88, 1]}}
          exit={{ opacity: 0, x: `${prevIdx < currIdx ? "1000px" : "-1000px"}`}}
          
          className="flex flex-col items-center justify-center xl:items-start w-full h-fit px-2 
          xl:flex-row
          ">
            
          <motion.div 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 0.5}}
          className=" flex items-center justify-center p-4 mt-2 xl:basis-2/3 sm:h-[350px] 
          sm:w-full md:w-11/12 lg:w-10/12 md:h-[400px] lg:h-[450px] xl:h-[550px] 2xl:h-[575px] border-2
          border-[#01E08F] rounded-2xl xl:mr-20">
            <img className="w-full h-full 2xl:w-11/12" src={selected.giffy} alt="" />
          </motion.div>

          <motion.div
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 0.75}}
          className="flex flex-col items-center justify-center xl:mt-2 xl:mr-20 w-full border-0 rounded-2xl 
          p-6 space-y-2 md:space-y-0
          xl:basis-1/4  2xl:basis-1/3 md:flex-row md:flex-wrap xl:border-2 xl:border-[#01E08F] xl:flex-col xl:space-y-2"
          >
          <motion.h2 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 0.75}}
          className="flex items-center justify-center border-2 border-[#01E08F] rounded-2xl font-semibold
          text-white w-full h-fit lg:h-20 p-4 md:basis-1/2">{selected.title}</motion.h2>

          <motion.h2 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 1}}
          className="flex items-center justify-center border-2 border-[#01E08F] rounded-2xl font-semibold
          text-white w-full h-fit lg:h-20 p-4 md:basis-1/2">{selected.subtitle}</motion.h2>

          <motion.p 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 1.25}}
          className="flex items-center justify-center border-2 border-[#01E08F] rounded-2xl font-semibold
          text-white w-full h-fit lg:h-20 p-4 md:basis-full">
            {selected.description}
          </motion.p>
          
          </motion.div>
 
          </motion.div>
          
        )}
        </AnimatePresence>

        <AnimatePresence>
        {currIdx === 1 && (
          
          <motion.div 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "-1000px" : "1000px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.25, delay: 0.25, ease: [0.61, 1, 0.88, 1]}}
          exit={{ opacity: 0, x: `${prevIdx < currIdx ? "1000px" : "-1000px"}`}}
          
          className="flex flex-col items-center justify-center xl:items-start w-full h-fit px-2 
          xl:flex-row
          ">
            
          <motion.div 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 0.5}}
          className=" flex items-center justify-center p-4 mt-2 xl:basis-2/3 sm:h-[350px] 
          sm:w-full md:w-11/12 lg:w-10/12 md:h-[400px] lg:h-[450px] xl:h-[550px] 2xl:h-[575px] border-2
          border-[#01E08F] rounded-2xl xl:mr-20">
            <img className="w-full h-full 2xl:w-11/12" src={selected.giffy} alt="" />
          </motion.div>

          <motion.div
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 0.75}}
          className="flex flex-col items-center justify-center xl:mt-2 xl:mr-20 w-full border-0 rounded-2xl 
          p-6 space-y-2 md:space-y-0
          xl:basis-1/4  2xl:basis-1/3 md:flex-row md:flex-wrap xl:border-2 xl:border-[#01E08F] xl:flex-col xl:space-y-2"
          >
          <motion.h2 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 0.75}}
          className="flex items-center justify-center border-2 border-[#01E08F] rounded-2xl font-semibold
          text-white w-full h-fit lg:h-20 p-4 md:basis-1/2">{selected.title}</motion.h2>

          <motion.h2 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 1}}
          className="flex items-center justify-center border-2 border-[#01E08F] rounded-2xl font-semibold
          text-white w-full h-fit lg:h-20 p-4 md:basis-1/2">{selected.subtitle}</motion.h2>

          <motion.p 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 1.25}}
          className="flex items-center justify-center border-2 border-[#01E08F] rounded-2xl font-semibold
          text-white w-full h-fit lg:h-20 p-4 md:basis-full">
            {selected.description}
          </motion.p>
          
          </motion.div>
 
          </motion.div>
          
        )}
        </AnimatePresence>

        <AnimatePresence>
        {currIdx === 2 && (
          
          <motion.div 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "-1000px" : "01000px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.25, delay: 0.25, ease: [0.61, 1, 0.88, 1]}}
          exit={{ opacity: 0, x: `${prevIdx < currIdx ? "-1000px" : "1000px"}`}}
          
          className="flex flex-col items-center justify-center xl:items-start w-full h-fit px-2 
          xl:flex-row
          ">
            
          <motion.div 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 0.5}}
          className=" flex items-center justify-center p-4 mt-2 xl:basis-2/3 sm:h-[350px] 
          sm:w-full md:w-11/12 lg:w-10/12 md:h-[400px] lg:h-[450px] xl:h-[550px] 2xl:h-[575px] border-2
          border-[#01E08F] rounded-2xl xl:mr-20">
            <img className="w-full h-full 2xl:w-11/12" src={selected.giffy} alt="" />
          </motion.div>

          <motion.div
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 0.75}}
          className="flex flex-col items-center justify-center xl:mt-2 xl:mr-20 w-full border-0 rounded-2xl 
          p-6 space-y-2 md:space-y-0
          xl:basis-1/4  2xl:basis-1/3 md:flex-row md:flex-wrap xl:border-2 xl:border-[#01E08F] xl:flex-col xl:space-y-2"
          >
          <motion.h2 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 0.75}}
          className="flex items-center justify-center border-2 border-[#01E08F] rounded-2xl font-semibold
          text-white w-full h-fit lg:h-20 p-4 md:basis-1/2">{selected.title}</motion.h2>

          <motion.h2 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 1}}
          className="flex items-center justify-center border-2 border-[#01E08F] rounded-2xl font-semibold
          text-white w-full h-fit lg:h-20 p-4 md:basis-1/2">{selected.subtitle}</motion.h2>

          <motion.p 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 1.25}}
          className="flex items-center justify-center border-2 border-[#01E08F] rounded-2xl font-semibold
          text-white w-full h-fit lg:h-20 p-4 md:basis-full">
            {selected.description}
          </motion.p>
          
          </motion.div>
 
          </motion.div>
          
        )}
        </AnimatePresence>

        <AnimatePresence>
        {currIdx === 3 && (
          
          <motion.div 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "-1000px" : "1000px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.25, delay: 0.25, ease: [0.61, 1, 0.88, 1]}}
          exit={{ opacity: 0, x: `${prevIdx < currIdx ? "1000px" : "-1000px"}`}}
          
          className="flex flex-col items-center justify-center xl:items-start w-full h-fit px-2 
          xl:flex-row
          ">
            
          <motion.div 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 0.5}}
          className=" flex items-center justify-center p-4 mt-2 xl:basis-2/3 sm:h-[350px] 
          sm:w-full md:w-11/12 lg:w-10/12 md:h-[400px] lg:h-[450px] xl:h-[550px] 2xl:h-[575px] border-2
          border-[#01E08F] rounded-2xl xl:mr-20">
            <img className="w-full h-full 2xl:w-11/12" src={selected.giffy} alt="" />
          </motion.div>

          <motion.div
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 0.75}}
          className="flex flex-col items-center justify-center xl:mt-2 xl:mr-20 w-full border-0 rounded-2xl 
          p-6 space-y-2 md:space-y-0
          xl:basis-1/4  2xl:basis-1/3 md:flex-row md:flex-wrap xl:border-2 xl:border-[#01E08F] xl:flex-col xl:space-y-2"
          >
          <motion.h2 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 0.75}}
          className="flex items-center justify-center border-2 border-[#01E08F] rounded-2xl font-semibold
          text-white w-full h-fit lg:h-20 p-4 md:basis-1/2">{selected.title}</motion.h2>

          <motion.h2 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 1}}
          className="flex items-center justify-center border-2 border-[#01E08F] rounded-2xl font-semibold
          text-white w-full h-fit lg:h-20 p-4 md:basis-1/2">{selected.subtitle}</motion.h2>

          <motion.p 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 1.25}}
          className="flex items-center justify-center border-2 border-[#01E08F] rounded-2xl font-semibold
          text-white w-full h-fit lg:h-20 p-4 md:basis-full">
            {selected.description}
          </motion.p>
          
          </motion.div>
 
          </motion.div>
          
        )}
        </AnimatePresence>
        

        

        <AnimatePresence>
        {currIdx === 4 && (
          
          <motion.div 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "-1000px" : "1000px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.25, delay: 0.25, ease: [0.61, 1, 0.88, 1]}}
          exit={{ opacity: 0, x: `${prevIdx < currIdx ? "1000px" : "-1000px"}`}}
          
          className="flex flex-col items-center justify-center xl:items-start w-full h-fit px-2 
          xl:flex-row
          ">
            
          <motion.div 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 0.5}}
          className=" flex items-center justify-center p-4 mt-2 xl:basis-2/3 sm:h-[350px] 
          sm:w-full md:w-11/12 lg:w-10/12 md:h-[400px] lg:h-[450px] xl:h-[550px] 2xl:h-[575px] border-2
          border-[#01E08F] rounded-2xl xl:mr-20">
            <AudioPlayer music={selected.music} />
          </motion.div>

          <motion.div
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 0.75}}
          className="flex flex-col items-center justify-center xl:mt-2 xl:mr-20 w-full border-0 rounded-2xl 
          p-6 space-y-2 md:space-y-0
          xl:basis-1/4  2xl:basis-1/3 md:flex-row md:flex-wrap xl:border-2 xl:border-[#01E08F] xl:flex-col xl:space-y-2"
          >
          <motion.h2 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 0.75}}
          className="flex items-center justify-center border-2 border-[#01E08F] rounded-2xl font-semibold
          text-white w-full h-fit lg:h-20 p-4 md:basis-1/2">{selected.title}</motion.h2>

          <motion.h2 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 1}}
          className="flex items-center justify-center border-2 border-[#01E08F] rounded-2xl font-semibold
          text-white w-full h-fit lg:h-20 p-4 md:basis-1/2">{selected.subtitle}</motion.h2>

          <motion.p 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 1.25}}
          className="flex items-center justify-center border-2 border-[#01E08F] rounded-2xl font-semibold
          text-white w-full h-fit lg:h-20 p-4 md:basis-full">
            {selected.description}
          </motion.p>
          
          </motion.div>
 
          </motion.div>
          
        )}
        </AnimatePresence>

        <AnimatePresence>
        {currIdx === 5 && (
          
          <motion.div 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "-1000px" : "1000px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.25, delay: 0.25, ease: [0.61, 1, 0.88, 1]}}
          exit={{ opacity: 0, x: `${prevIdx < currIdx ? "1000px" : "-1000px"}`}}
          
          className="flex flex-col items-center justify-center xl:items-start w-full h-fit px-2 
          xl:flex-row
          ">
            
          <motion.div 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 0.5}}
          className=" flex items-center justify-center p-4 mt-2 xl:basis-2/3 sm:h-[350px] 
          sm:w-full md:w-11/12 lg:w-10/12 md:h-[400px] lg:h-[450px] xl:h-[550px] 2xl:h-[575px] border-2
          border-[#01E08F] rounded-2xl xl:mr-20">
            <img className="w-full h-full 2xl:w-11/12" src={selected.giffy} alt="" />
          </motion.div>

          <motion.div
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 0.75}}
          className="flex flex-col items-center justify-center xl:mt-2 xl:mr-20 w-full border-0 rounded-2xl 
          p-6 space-y-2 md:space-y-0
          xl:basis-1/4  2xl:basis-1/3 md:flex-row md:flex-wrap xl:border-2 xl:border-[#01E08F] xl:flex-col xl:space-y-2"
          >
          <motion.h2 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 0.75}}
          className="flex items-center justify-center border-2 border-[#01E08F] rounded-2xl font-semibold
          text-white w-full h-fit lg:h-20 p-4 md:basis-1/2">{selected.title}</motion.h2>

          <motion.h2 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 1}}
          className="flex items-center justify-center border-2 border-[#01E08F] rounded-2xl font-semibold
          text-white w-full h-fit lg:h-20 p-4 md:basis-1/2">{selected.subtitle}</motion.h2>

          <motion.p 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 1.25}}
          className="flex items-center justify-center border-2 border-[#01E08F] rounded-2xl font-semibold
          text-white w-full h-fit lg:h-20 p-4 md:basis-full">
            {selected.description}
          </motion.p>
          
          </motion.div>
 
          </motion.div>
          
        )}
        </AnimatePresence>

        <AnimatePresence>
        {currIdx === 6 && (
          
          <motion.div 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "-1000px" : "1000px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.25, delay: 0.25, ease: [0.61, 1, 0.88, 1]}}
          exit={{ opacity: 0, x: `${prevIdx < currIdx ? "1000px" : "-1000px"}`}}
          
          className="flex flex-col items-center justify-center xl:items-start w-full h-fit px-2 
          xl:flex-row
          ">
            
          <motion.div 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 0.5}}
          className=" flex items-center justify-center p-4 mt-2 xl:basis-2/3 sm:h-[350px] 
          sm:w-full md:w-11/12 lg:w-10/12 md:h-[400px] lg:h-[450px] xl:h-[550px] 2xl:h-[575px] border-2
          border-[#01E08F] rounded-2xl xl:mr-20">
            <img className="w-full h-full 2xl:w-11/12" src={selected.giffy} alt="" />
          </motion.div>

          <motion.div
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 0.75}}
          className="flex flex-col items-center justify-center xl:mt-2 xl:mr-20 w-full border-0 rounded-2xl 
          p-6 space-y-2 md:space-y-0
          xl:basis-1/4  2xl:basis-1/3 md:flex-row md:flex-wrap xl:border-2 xl:border-[#01E08F] xl:flex-col xl:space-y-2"
          >
          <motion.h2 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 0.75}}
          className="flex items-center justify-center border-2 border-[#01E08F] rounded-2xl font-semibold
          text-white w-full h-fit lg:h-20 p-4 md:basis-1/2">{selected.title}</motion.h2>

          <motion.h2 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 1}}
          className="flex items-center justify-center border-2 border-[#01E08F] rounded-2xl font-semibold
          text-white w-full h-fit lg:h-20 p-4 md:basis-1/2">{selected.subtitle}</motion.h2>

          <motion.p 
          initial={{ opacity: 0, x: `${prevIdx < currIdx ? "100px" : "-100px"}`}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75, delay: 1.25}}
          className="flex items-center justify-center border-2 border-[#01E08F] rounded-2xl font-semibold
          text-white w-full h-fit lg:h-20 p-4 md:basis-full">
            {selected.description}
          </motion.p>
          
          </motion.div>
 
          </motion.div>
          
        )}
        </AnimatePresence>

       
        </div>

      
        
   
        )
      }
    

export default ProjectCarousel2
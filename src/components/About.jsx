import React, { useEffect, useState} from "react";
import { motion } from 'framer-motion'
import FlashyText from "./FlashyText";
import Profile1 from '../images/matt-funny-transparenty.png'
import Profile2 from '../images/profile2.png'
import Profile3 from '../images/profile3.png'
import Profile4 from '../images/profile4.png'
import Profile11 from '../images/profile11.png'
import Profile12 from '../images/profile12.png'
import Profile14 from '../images/profile14.png'
import Profile16 from '../images/profile16.png'

import ComputerCode from '../images/computer-code.gif'
import gif1 from '../images/cool-gif-1.gif'
import gif2 from '../images/cool-gif-2.gif'
import gif3 from '../images/cool-gif-3.gif'
import gif4 from '../images/cool-gif-4.gif'
import gif5 from '../images/cool-gif-5.gif'
import { RiArrowRightSLine } from 'react-icons/ri'

export default function About() {
  const gifList = [gif1, gif2, gif3, gif4, gif5, ComputerCode]
  const picList = [Profile14, Profile16, Profile2, Profile3, Profile4, Profile11, Profile12, Profile1]

  const [currentBg, setCurrentBg] = useState(0)
  const [bg, setBg] = useState(gifList[currentBg])
  const [currentPic, setCurrentPic] = useState(0)
  const [pic, setPic] = useState(picList[currentPic])

  const changeBg = () => {
    setCurrentBg(prevcurrentBg => prevcurrentBg + 1)
    setBg(prevBg => gifList[currentBg % gifList.length])
  }

  const changePic = () => {
    setCurrentPic(currentPic + 1)
    setPic(picList[currentPic % picList.length])
  }
  
  useEffect(() => {
    
    setBg(prevBg => gifList[currentBg % gifList.length])
  
  }, [currentBg])

  useEffect(() => {

    setPic(prevcurrentPic => picList[currentPic % picList.length])
  
  }, [currentPic])


  
  return (    <section id="about">

      <div className=" bg-slate-800 h-screen w-screen mx-auto flex px-10 md:flex-row flex-col items-center z-0 ">
  
        <div className="lg:flex md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <FlashyText script="Hey, I'm Matt. Welcome to my portfolio." variantType="falling" />
          
 
          <p className="mb-8 leading-relaxed text-white">
            Originally and always a Python developer. Full-stack web developer. I absolutely enjoy the ease and speed of creating a
            React responsive design. Looking forward to creating many projects in the future. Always improving and always learning.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-slate-800 hover:text-slate-900 bg-[#01E08F] border-0 py-2 px-6 focus:outline-none
              ring-[#01E08F] 
              hover:ring-2 hover:ring-offset-2 hover:ring-offset-slate-800 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-300 bg-gray-800 border-0 ring-[#01E08F]
              hover:ring-2 hover:ring-offset-2 hover:ring-offset-slate-800
              py-2 px-6 focus:outline-none hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
          
        </div>
        <div className="h-[400px] w-[300px] flex justify-end items-end rounded-2xl lg:h-[500px] lg:w-[400px]" 
        style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', 
        backgroundPosition: 'center'}}>
          <img
            className="brightness-100 w-fit h-fit"
            alt="This is a picture of the dude that made this site."
            src={pic}
          />
        </div>
        <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 2, delay: 3}}
        className="items-center justify-center flex flex-col h-60">

          <button type="submit" className="flex items-center justify-between 
          w-28 h-10 m-5 rounded-2xl text-sm  pl-2.5 bg-blue-500 text-white 
          font-bold shadow-2xl hover:ring-2" onClick={() => 
            setCurrentBg(prevcurrentBg => prevcurrentBg + 1)}>
          background <RiArrowRightSLine className="mr-1.5 h-6 w-6" /></button>
          <button type="submit" className="flex items-center justify-between 
          w-28 space-x-10 h-10 bg-blue-500 m-5 rounded-2xl text-sm text-white 
          font-bold pl-2.5 shadow-2xl hover:ring-2" onClick={(changePic)}>
          profile pic <RiArrowRightSLine className="mr-1.5 h-6 w-6" /></button>
        </motion.div>
        

      </div>
    </section>
  );
}
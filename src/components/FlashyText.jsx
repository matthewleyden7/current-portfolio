import React, { useState, useEffect } from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";




const FlashyText = ({ script, centered }) => {
    const [wordArray, setWordArray] = useState(script.split(' '))
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    const [nextLoc, setNextLoc] = useState([
      [-300, 0], [0, -275], [250, 0], [0, 225],
      [-200, 0], [0, -175], [150, 0], [0, 125],
      [-100, 0], [0, -75], [50, 0], [0, 25],
      [-50, 0], [0, -50], [50, 0], [0, 50],
      [-50, 0], [0, -50], [50, 0], [0, 50],
      [-50, 0], [0, -50], [50, 0], [0, 50],
      [-50, 0], [0, -50], [50, 0], [0, 50],
      [-50, 0], [0, -50], [50, 0], [0, 50],
      [-50, 0], [0, -50], [50, 0], [0, 50],
      [-50, 0], [0, -50], [50, 0], [0, 50],
      [-50, 0], [0, -50], [50, 0], [0, 50],
      [-50, 0], [0, -50], [50, 0], [0, 50],
      [-50, 0], [0, -50], [50, 0], [0, 50],
      [-50, 0], [0, -50], [50, 0], [0, 50],
      [-50, 0], [0, -50], [50, 0], [0, 50],]
      )

      const [nextLoc2, setNextLoc2] = useState([
        [-300, 0], [0, -275], [250, 0], [0, 225],
        [-290, 0], [0, -175], [150, 0], [0, 125],
        [-280, 0], [0, -75], [50, 0], [0, 25],
        [-270, 0], [0, -50], [50, 0], [0, 50],
        [-50, 0], [0, -50], [50, 0], [0, 50],
        [-50, 0], [0, -50], [50, 0], [0, 50],
        [-50, 0], [0, -50], [50, 0], [0, 50],
        [-50, 0], [0, -50], [50, 0], [0, 50],
        [-50, 0], [0, -50], [50, 0], [0, 50],
        [-50, 0], [0, -50], [50, 0], [0, 50],
        [-50, 0], [0, -50], [50, 0], [0, 50],
        [-50, 0], [0, -50], [50, 0], [0, 50],
        [-50, 0], [0, -50], [50, 0], [0, 50],
        [-50, 0], [0, -50], [50, 0], [0, 50],
        [-50, 0], [0, -50], [50, 0], [0, 50],]
        )

      const flashyTextVariants = (x, y, idx2) => {
        return {
        visible: { opacity: 1, x: '0px', y: '0px', transition: { duration: 0.75, delay: idx2 / 10} },
        hidden: { opacity: 0, x: `${x}px`, y: `${y}px`}}
      };



  return (
    <div className={`${centered ? "flex flex-row flex-wrap pl-100 justify-center" :
    "lg:flex md:flex lg:pr-24 md:pr-16 flex flex-row flex-wrap text-transparent"}`}>
    {wordArray.map((word, idx) => {
           
           return (
            <div key={idx} className="focus:outline-none" style={{ width: 'fit-content', display: 'flex'}}
            >
              {word.split('').map((letter, idx2) => { 
                return (
                  <motion.h1 
                  key={idx2}
                  ref={ref}
                  initial="hidden"
                  animate={controls}
                  variants={flashyTextVariants(nextLoc[idx][0], nextLoc[idx][1], idx2)}
                  className=" title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-500">
                  {letter}
                  </motion.h1>)
              })}
              <div className="w-3"></div>
            </div>

           )
      })}
      </div>
    
  )
}

export default FlashyText
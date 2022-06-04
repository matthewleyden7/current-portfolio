import React, { useState, useEffect } from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";




const FlashyText = ({ script, centered }) => {
    const [wordArray, setWordArray] = useState(script.split(' '))
    const reversed = [...wordArray].reverse()
    console.log(reversed)
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start('hidden')
      }
    }, [controls, inView]);

    const [nextLoc, setNextLoc] = useState([

      [50, 10], [-50, -10], [100, 20], [-100, -20],
      [150, 30], [-150, -30], [200, 40], [-200, -40],
      [250, 50], [-250, -50], [300, 60], [-300, -60],
      [350, 70], [-350, -70], [400, 80], [-400, -80],
      [450, 90], [-450, 90], [500, 100], [-500, -500],
      [50, 10], [-50, -10], [100, 20], [-100, -20],
      [150, 30], [-150, -30], [200, 40], [-200, -40],
      [250, 50], [-250, -50], [300, 60], [-300, -60],
      [350, 70], [-350, -70], [400, 80], [-400, -80],
      [450, 90], [-450, 90], [500, 100], [-500, -500],
      [50, 10], [-50, -10], [100, 20], [-100, -20],
      [150, 30], [-150, -30], [200, 40], [-200, -40],
      [250, 50], [-250, -50], [300, 60], [-300, -60],
      [350, 70], [-350, -70], [400, 80], [-400, -80],
      [450, 90], [-450, 90], [500, 100], [-500, -500],
      [50, 10], [-50, -10], [100, 20], [-100, -20],
      [150, 30], [-150, -30], [200, 40], [-200, -40],
      [250, 50], [-250, -50], [300, 60], [-300, -60],
      [350, 70], [-350, -70], [400, 80], [-400, -80],
      [450, 90], [-450, 90], [500, 100], [-500, -500],
    ])
    const [nextLoc3, setNextLoc3] = useState([
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

        [100, 0], [-100, 0]
      ])
      const [count, setCount] = useState(0)
      const flashyTextVariants = (x, y, indexNum) => {
     
    
        
        return {
        visible: { opacity: 1, x: '0px', y: '0px', transition: { duration: 0.7} },
        hidden: { opacity: 0, x: `${x}px`, y: `${y}px` }}
      };



  return (
    <div className={`${centered ? "flex flex-row flex-wrap pl-100 justify-center" :
    "lg:flex md:flex lg:pr-24 md:pr-16 flex flex-row flex-wrap text-transparent"}`}>
    {wordArray.map((word, idx) => {
           
           return (
            <div key={idx} style={{ width: 'fit-content', display: 'flex'}}>
              {word.split('').map((letter, idx2) => { 
                return (
                  <motion.h1 
                  key={idx2}
                  ref={ref}
                  initial="hidden"
                  animate={controls}
                  exit={{ opacity: 0}}
                  variants={flashyTextVariants(nextLoc2[idx2 % 2][0], nextLoc2[idx2 % 2][1], idx * idx2)}
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
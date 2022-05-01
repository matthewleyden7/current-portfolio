import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./styles.css";
const squareVariants = {
  visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
};
const Square = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="square"
    ></motion.div>
  );
}
export default function TestScroll() {
  return (
    <div className="container h-screen w-screen mx-auto flex px-10 py-10 md:flex-row flex-row items-center pt-50">
      <h1>Scroll Down</h1>
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}
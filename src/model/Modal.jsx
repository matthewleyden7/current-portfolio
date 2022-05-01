import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { ModalBox, Container2 } from "./Styles";
import ContactForm from '../components/ContactForm';

export const Modal = ({showModal}) => {
  const [poop, showPoop] = useState(showModal)
  return (
  <Container2>
  <AnimatePresence>
    {showModal && (
      <ModalBox
        initial={{ opacity: 0, y: 60, scale: 0.3 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: "spring", stiffness: 300 }
        }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
        >
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
        >
          <ContactForm />
        </motion.div>
      </ModalBox>
    )}
  </AnimatePresence>
</Container2>
  )
}


export default Modal
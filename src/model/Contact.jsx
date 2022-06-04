import React, {useState, useEffect } from 'react'
import { ToggleButton, Container } from "./Styles";
import Modal from "./Modal";
import AOS from 'aos';
import "aos/dist/aos.css";
import Bench from '../images/bench.jpg'


function Contact() {

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  })
  return (
    <Container style={{ backgroundImage: `url(${Bench})`}} id="contact">
      
      <ToggleButton
        data-aos="fade-left"
        onClick={toggleModal}
      >
   
        Contact Me
      </ToggleButton>

      <a href="https://github.com/matthewleyden7">
      <ToggleButton
        data-aos="fade-right"
        
      >Visit my Github</ToggleButton>
      </a>
      <Modal showModal={showModal}/>
     
    </Container>
  );
}

export default Contact
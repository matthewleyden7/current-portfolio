import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'

import './Popup.css'


const Popup = () => {
  const [isOpen, setIsOpen] = useState(true)
  
  const handleClick = () => {
      if (isOpen===false) {
          setIsOpen(true)
      } else {
          setIsOpen(false)
      }
  } 

  return (isOpen) ? (
    <div className='da__popup' onClick={handleClick}>
        <motion.div 
        initial={{ opacity: 0, height: "100px"}}
        animate={{ opacity: 1, height: "600px"}}
        transition={{ duration: 1}}
        className='da__popup_inner'>
        <div className='da__inner_location'>
            <h2>Choose your location</h2>
        </div>
        <div className='food__availability_label'>
            Product availability and pricing may differ between locations
        </div>
        <div className='food__address_box'>
            <h4 className="text__black_small">Mirna Leyden 5515 OGDEN CT, CONCORD CA 94521</h4>
        </div>
        <div className='food__address_box'>
            <h4 className="text__black_small">Mirna Leyden 5515 OGDEN CT, CONCORD CA 94521</h4>
        </div>
        <div className='food__address_box'>
            <h4 className="text__black_small">Mirna Leyden 5515 OGDEN CT, CONCORD CA 94521</h4>
        </div>
        <div className='food__manage_lbl'>
            <h6 className='text__blue_small'>See all</h6>
            <h6 className='text__blue_small'>Manage Address Book</h6>

        </div>
          
        </motion.div>
    </div>
  ) : "";
  }

export default Popup
import React, { useState, useEffect } from 'react'
import './Nav.css';
import logo from '../images/netflix_logo.png';
import avatar_logo from '../images/angry_bird_user_logo.png';

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
          
            
        </div>
    )
}

export default Nav

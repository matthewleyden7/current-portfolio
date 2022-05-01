import React from 'react'
import styled from "styled-components";

const ArrowBtn = styled.button`
    background-color: white;
    width: 39px;
    height: 50px;
    border: solid lightgrey 1px;
    border-radius: 7px;
   

    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 3px 0px 0px rgba(200,200,200,.2);
    transition: ease-in 0.5s;
    &:hover {
        cursor: pointer;
        background-color: rgba(0,0,0,0.1);
        border-radius: 20px;

    }

`
const ArrowButton = ({ ArrowPic }) => {

  return (
    <ArrowBtn><img src={ArrowPic} alt="" /></ArrowBtn>
  )
}

export default ArrowButton
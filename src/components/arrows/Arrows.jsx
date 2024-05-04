

import React from 'react'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import './arrows.css'

export const NextArrow = (props) => {
   return (
      <div className='next-arrow' onClick={props.onClick}>
         <FaAngleRight />
      </div>
   )
}

export const PrevArrow = (props) => {
   return (
      <div className='prev-arrow' onClick={props.onClick}>
         <FaAngleLeft />
      </div>
   )
}
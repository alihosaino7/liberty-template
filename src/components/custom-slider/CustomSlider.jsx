

import React, { useRef } from 'react'
import Slider from 'react-slick'
import { PrevArrow, NextArrow } from '../components'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './custom-slider.css'

const CustomSlider = ({ settings, className, children }) => {

  const sliderRef = useRef()

  return (
    <div className={`custom-slider ${className}`}>
      <Slider {...settings} ref={sliderRef} >
         {children}
      </Slider>
      <div className='custom-slider__arrows'>
        <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
        <NextArrow onClick={() => sliderRef.current.slickNext()} />
      </div>
    </div>
  )
}

export default CustomSlider
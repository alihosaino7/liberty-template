

import React, { useRef } from 'react'
import Slider from "react-slick"
import { PrevArrow, NextArrow } from '../components'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import banner01 from '../../assets/banner-01.png'
import banner02 from '../../assets/banner-02.png'
import './carousel.css'

const Carousel = () => {

  const sliderRef = useRef()

  let settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='carousel'>
      <Slider {...settings} ref={sliderRef}>
        <div><img src={banner01} alt='/' /></div>
        <div><img src={banner02} alt='/' /></div>
      </Slider>
      <div className='carousel-arrows'>
        <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
        <NextArrow onClick={() => sliderRef.current.slickNext()} />
      </div>
    </div>
  )
}

export default Carousel
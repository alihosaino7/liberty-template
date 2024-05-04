

import React from 'react'
import { HeadingSection, SecondaryButton, NextArrow, PrevArrow, CustomSlider } from '../../components/components'
import collectionsItems from '../../data/collectionsData'
import collectionImage from '../../assets/collection-01.jpg'
import './collections.css'

const Collections = () => {

  let settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className='collections'>
      <HeadingSection>explore some hot <span>collections</span> in market</HeadingSection>
        <CustomSlider settings={settings} className='collections-slider' >
          {collectionsItems.map((collectionsItem, index) => {
              const { heading, items, category, explore } = collectionsItem
              return (
                <div className='collections__item' key={index}>
                  <div className='collections__item--image'>
                    <img src={collectionImage} alt='collection img' />
                  </div>
                  <div className='collections__item--content'>
                    <h3>{heading}</h3>
                    <div className='collections__item--content__row-1'>
                      <span>Items In Collection:</span>
                      <span>Category:</span>
                    </div>
                    <div className='collections__item--content__row-2'>
                      <h3>{items}</h3>
                      <h3>{category}</h3>
                    </div>
                  </div>
                  <SecondaryButton>{explore}</SecondaryButton>
                </div>
              )
            })}
        </CustomSlider>
    </div>
  )
}

export default Collections

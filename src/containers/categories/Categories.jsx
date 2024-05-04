

import React from 'react'
import categoriesData from '../../data/categoriesData'
import { HeadingSection } from '../../components/components'
import { FaAngleRight } from 'react-icons/fa'
import './categories.css'

const Categories = () => {
   function toTopSection() {
      window.scrollTo({
         behavior: 'smooth',
         top: 0,
      })
   }
  return (
    <div className='categories'>
      <HeadingSection>browse through our <span>categories</span> here.</HeadingSection>
      <div className='categories__items'>
         {
            categoriesData.map(categoryItem => {
               const { image, text } = categoryItem
               return (
                  <div className='category__item'>
                     <div className='category__img'>
                        <img src={image} alt='category img' />
                     </div>
                     <h3>{text}</h3>
                     <span className='category__item__btn' onClick={toTopSection}>
                        <FaAngleRight />
                     </span>
                  </div>
               )
            })
         }
      </div>
    </div>
  )
}

export default Categories
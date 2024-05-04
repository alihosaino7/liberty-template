

import React from 'react'
import { HeadingSection, Author } from '../../components/components'
import { Container } from '../containers'
import itemPreviewImage from '../../assets/item-details-01.jpg'
import authorImage from '../../assets/current-01.jpg'
import './item-preview.css'

const ItemPreview = () => {
  return (
    <div className='item-preview'>
      <Container>
         <HeadingSection>This Is <span>Your Item</span> Preview</HeadingSection>
         <div className='item-preview__content'>
            <div className='item-preview__content__image'>
               <img src={itemPreviewImage} alt='/' />
            </div>
            <div className='item-preview__content__info'>
               <h3>Dolores Haze Westworld Eye</h3>
               <Author img={authorImage} authorAccount={'@Kataleey'} authorName={'Kataleya Smithee'} />
               <p>
                  Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua.
               </p>
               <div className='item-preview__content__info__row'>
                  <div className='item-preview__content__info__col'>
                     <p>Current Bid</p>
                     <h3>6.06 ETH</h3>
                     <span>($8,025.50)</span>
                  </div>
                  <div className='item-preview__content__info__col'>
                     <p>Owner</p>
                     <h3>David Walker</h3>
                     <span>(@davidwalker)</span>
                  </div>
                  <div className='item-preview__content__info__col'>
                     <p>Ends In</p>
                     <h3>3D 05H 20M 58S</h3>
                     <span>(January 22nd, 2021)</span>
                  </div>
               </div>
            </div>
         </div>
      </Container>
    </div>
  )
}

export default ItemPreview


import React from 'react'
import { Author, BorderedButton, CustomSelect, HeadingSection, MainButton, SecondaryButton } from '../../components/components'
import { Container } from '../containers'
import itemDetailsImage from '../../assets/item-details-01.jpg'
import authorImage from '../../assets/author-02.jpg'
import author01 from '../../assets/current-01.jpg'
import author02 from '../../assets/current-02.jpg'
import author03 from '../../assets/current-03.jpg'
import author04 from '../../assets/current-04.jpg'
import './item-details.css'

const authorsImages = [author01, author02, author03, author04, author01, author02]

const ItemDetails = () => {
  return (
    <div className='item-details'>
      <Container>
         <HeadingSection>view details <span>for item</span> here.</HeadingSection>
         <div className='item-details__content'>
            <div className='item-details__content__image'>
               <img src={itemDetailsImage} alt='/' />
            </div>
            <div className='item-details__content__info'>
               <h3>Dolores Haze Westworld Eye</h3>
               <Author img={authorImage} authorAccount={'@libertyart'} authorName={'Liberty Artist'} />
               <p>
                  Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua.
               </p>
               <div className='item-details__content__info__row'>
                  <div className='item-details__content__info__col'>
                     <p>Current Bid</p>
                     <h3>6.06 ETH</h3>
                     <span>($8,025.50)</span>
                  </div>
                  <div className='item-details__content__info__col'>
                     <p>Owner</p>
                     <h3>David Walker</h3>
                     <span>(@davidwalker)</span>
                  </div>
                  <div className='item-details__content__info__col'>
                     <p>Ends In</p>
                     <h3>3D 05H 20M 58S</h3>
                     <span>(January 22nd, 2021)</span>
                  </div>
               </div>
               <div className='item-details__content__info__row'>
                  <h4>Place Bid:</h4>
                  <BorderedButton>1 ETH</BorderedButton>
                  <SecondaryButton>Submit Now</SecondaryButton>
               </div>
            </div>
         </div>
         <div className='current-bid'>
            <div className='current-bid__header'>
               <MainButton>current biddings prices (ETH)</MainButton>
               <CustomSelect itemIndex={0}>
                  <div className='option'>Sort By: Latest</div>
                  <div className='option'>Sort By: Oldest</div>
                  <div className='option'>Sort By: Lowest</div>
                  <div className='option'>Sort By: Highest</div>
               </CustomSelect>
            </div>
            <div className='current-bid__items'>
               {authorsImages.map(authorImage => {
                  return (
                     <div className='current-bid__item'>
                        <div className='current-bid__item__image'>
                           <img src={authorImage} alt='/' />
                        </div>
                        <div className='current-bid__item__content'>
                           <div className='current-bid__item__content-top'>
                              <h3>David Walker</h3>
                              <h4>@davidwalker</h4>
                           </div>
                           <div className='current-bid__item__content-bottom'>
                              <span>Bid: <h3>0.06 ETH</h3></span>
                              <time>24/07/2022, 22:00</time>
                           </div>
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>
      </Container>
    </div>
  )
}

export default ItemDetails
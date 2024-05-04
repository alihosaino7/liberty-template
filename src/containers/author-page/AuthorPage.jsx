

import React from 'react'
import { FaHandHolding, FaDollarSign, FaHeart} from 'react-icons/fa'
import { HeadingSection, SecondaryButton, DiscoverItem } from '../../components/components'
import author01 from '../../assets/current-01.jpg'
import author02 from '../../assets/current-02.jpg'
import author03 from '../../assets/current-03.jpg'
import author04 from '../../assets/current-04.jpg'
import { Container } from '../containers'
import './author-page.css'

const authorsImages = [author01, author02, author03, author04]

const AuthorPage = () => {
  return (
    <div className='author-page'>
      <Container>
         <div className='author-page-info'>
            <div className='author-page-info__left'>
               <img src={author04} alt='/' />
               <div>
                  <h3>Melanie Smith</h3>
                  <h5 className='primary-color'>@melanie32</h5>
               </div>
            </div>
            <div className='author-page-info__right rounded'>
               <div className='author-page-info__right__row-1'>
                  <div>
                     <FaHeart className='icon primary-color'/>
                     <p><span className='primary-color'>1238</span> Likes</p>
                  </div>
                  <div>
                     <FaHandHolding className='icon primary-color'/>
                     <p><span className='primary-color'>1238</span> Likes</p>
                  </div>
                  <div>
                     <FaDollarSign className='icon primary-color'/>
                     <p><span className='primary-color'>1238</span> Likes</p>
                  </div>
               </div>
               <div className='author-page-info__right__row-2'>
                  <h3>559 Followers</h3>
                  <SecondaryButton>Follow @Melanie32</SecondaryButton>
               </div>
            </div>
         </div>
         <HeadingSection>Melanie Smith's <span>Items</span>.</HeadingSection>
            <div className='author-page__items'>
            {authorsImages.map((author, index) => {
               return (
                  <DiscoverItem 
                     key={index} 
                     image={author} 
                     title={'Mutant Ape Bored'}
                     endsIn={'25th Nov'}
                     currentBid={'2.03 ETH'}
                  />
               )
            })}
            </div>
      </Container>
    </div>
  )
}

export default AuthorPage
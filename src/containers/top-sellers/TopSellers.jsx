

import React from 'react'
import { HeadingSection } from '../../components/components'
import { Container } from '../containers'
import topSellersItems from '../../data/topSellersData'
import './top-sellers.css'

const TopSellers = () => {
  return (
    <div className='top-sellers'>
      <Container>
        <HeadingSection>our top sellers this week.</HeadingSection>
        <div className='top-sellers__items'>
          {topSellersItems.map(item => {
            const { id, title, image, currencies } = item
            return <div className='top-sellers__item' key={id}>
              <h3>{id}.</h3>
              <img src={image} alt='/' />
              <div className='text'>
                <h3>{title}</h3>
                <p>{currencies}</p>
              </div>
            </div>
          })}
        </div>
      </Container>
    </div>
  )
}

export default TopSellers
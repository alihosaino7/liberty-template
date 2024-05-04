

import React from 'react'
import { HeadingSection, SecondaryButton, DiscoverItem, CustomSelect } from '../../components/components'
import { Container } from '../containers'
import discoverItems from '../../data/discoverItemsData'
import './discover-items.css'

const DiscoverItems = () => {

  return (
    <div className='discover-items'>
      <Container>
         <div className='discover-items__header'>
            <HeadingSection>
               discover some of our <span>Itmes</span>.
            </HeadingSection>
            <form className='discover-items__form'>
              <input type='text' placeholder='Type Something' />
              <CustomSelect itemIndex={0}>
                <div className='option'>All Categories</div>
                <div className='option'>Music</div>
                <div className='option'>Digital</div>
                <div className='option'>Blockchain</div>
                <div className='option'>Virual</div>
              </CustomSelect>
              <CustomSelect itemIndex={0}>
                <div className='option'>Available</div>
                <div className='option'>Ending Soon</div>
                <div className='option'>Coming Soon</div>
                <div className='option'>Closed</div>
              </CustomSelect>
              <SecondaryButton>Search</SecondaryButton>
            </form>
         </div>
         <div className='discover-items__items'>
          {discoverItems.map(item => {
            const { id, title, image, collection, category,
            isDouble, currentBid, endsIn, secImage, secTitle } = item
            return <DiscoverItem 
              id={id}
              title={title}
              image={image}
              isDouble={isDouble}
              currentBid={currentBid}
              endsIn={endsIn}
              secImage={secImage}
              secTitle={secTitle}
              category={category}
              collection={collection}
            />
          })}
         </div>
      </Container>
    </div>
  )
}

export default DiscoverItems
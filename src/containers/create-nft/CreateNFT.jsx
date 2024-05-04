
import React from 'react'
import { Container } from '../containers'
import createNftData from '../../data/createNftData'
import { SecondaryButton } from '../../components/components'
import './create-nft.css'

const CreateNFT = () => {
  return (
    <div className='create-nft'>
      <Container>
         <div className='create-nft__heading'>
            <h1>create your <span>nft</span> & put it on the market</h1>
            <SecondaryButton>Create Your NFT Now</SecondaryButton>
         </div>
         <div className='create-nft__items'>
            {createNftData.map(item => {
               const { img, description, id, title} = item
               return (
                  <div className='create-nft__item' key={id}>
                     <div className='create-nft__item__image'>
                        <img src={img} alt='/' />
                     </div>
                     <h3>{title}</h3>
                     <p>
                        {description}
                     </p>
                  </div>
               )
            })}
         </div>
      </Container>
    </div>
  )
}

export default CreateNFT
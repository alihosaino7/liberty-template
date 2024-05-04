

import React from 'react'
import { HeadingSection, SecondaryButton } from '../../components/components'
import { Container } from '../containers'
import './apply-for-item.css'

const ApplyForItem = () => {
  return (
    <div className='apply-for-item'>
      <HeadingSection>Apply For <span>Your Item</span> Here.</HeadingSection>
      <Container>
        <form className='apply-for-item__form'>
          <div className='apply-for-item__form__row'>
            <div className='apply-for-item__form__col'>
              <label htmlFor='title'>Item Title</label>
              <input type='text' placeholder='Ex.Lyon King' id='title' />
            </div>
            <div className='apply-for-item__form__col'>
              <label htmlFor='description'>Description For Item</label>
              <input type='text' placeholder='Give us your idea' id='description' />
            </div>
            <div className='apply-for-item__form__col'>
              <label htmlFor='username'>Your Username</label>
              <input type='text' placeholder='Ex. @alansmithee' id='username' />
            </div>
          </div>
          <div className='apply-for-item__form__row'>
            <div className='apply-for-item__form__col'>
              <label htmlFor='price'>Price Of Item</label>
              <input 
                type='text' 
                placeholder='Price depends on quality. Ex. 0.06 ETH' 
                id='price' />
            </div>
            <div className='apply-for-item__form__col'>
              <label htmlFor='royalties'>Royalties</label>
              <input 
                type='text' 
                placeholder='Common royalties 1-25%' 
                id='royalties' />
            </div>
          </div>
          <div className='apply-for-item__form__row'>
            <div className='apply-for-item__form__col'>
              <label htmlFor='file'>Your File</label>
              <input type='file' />
            </div>
            <div className='apply-for-item__form__col'>
              <SecondaryButton>Submit Your Applying</SecondaryButton>
            </div>
          </div>
        </form>
      </Container>
    </div>
  )
}

export default ApplyForItem
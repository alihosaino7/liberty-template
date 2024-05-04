

import React from 'react'
import { Link } from 'react-router-dom'
import { MainButton, SecondaryButton } from '../components'
import authorImage from '../../assets/current-04.jpg'
import './discover-item.css'

const discoverItem = (props) => {

  const { 
      title,
      image,
      id,
      endsIn,
      currentBid,
      isDouble,
      secImage,
      secTitle,
      category,
      collection } = props

  return (
    <div className={`discover-items__item ${isDouble ? 'double-item' : ''}`}>
      <Link to='/details' className='link'><SecondaryButton>View Details</SecondaryButton></Link>
      {isDouble && <MainButton>Double Item</MainButton>}
      {isDouble ?
      <div className='discover-items__item-top'>
         <div className='discover-items__item-top__col-1'>
            <div className='discover-items__item__image'>
               <div className='author-image'>
                  <img src={authorImage} alt='/' />
               </div>
            <img src={image} alt={id} />
            </div>
            <h3>{title}</h3>
         </div>
         <div className='discover-items__item-top__col-2'>
            <div className='discover-items__item__image'>
            <div className='author-image'>
               <img src={authorImage} alt='/' />
            </div>
            <img src={secImage} alt={id} />
            </div>
            <h3>{secTitle}</h3>
         </div>
      </div>
      : 
      <>
      <div className='discover-items__item__image'>
         <div className='author-image'>
            <img src={authorImage} alt='/' />
         </div>
         <img src={image} alt={id} />
      </div>
      <h3>{title}</h3>
      </>}
      <div className='discover-items__item__content'>
         <div className='discover-items__item__content__col'>
            <p>Current Bid:</p>
            <h3>{currentBid}</h3>
         </div>
         {isDouble && 
         <>
            <div className='discover-items__item__content__col'>
               <p>Category:</p>
               <h3>{category}</h3>
            </div>
            <div className='discover-items__item__content__col'>
               <p>Collection:</p>
               <h3>{collection}</h3>
            </div>
         </>}
         <div className='discover-items__item__content__col'>
            <p>Ends In:</p>
            <h3>{endsIn}</h3>
         </div>
      </div>
    </div>
  )
}

export default discoverItem
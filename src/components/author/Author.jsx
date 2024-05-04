

import React from 'react'
import './author.css'

const Author = ({ img, authorName, authorAccount }) => {
  return (
    <div className='author'>
      <img src={img} alt='/' />
      <span>
         <p>{authorName}</p>
         <h4>{authorAccount}</h4>
      </span>
    </div>
  )
}

export default Author
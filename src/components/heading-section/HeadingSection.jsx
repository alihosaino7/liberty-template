

import React from 'react'
import './heading-section.css'

const HeadingSection = ({ children }) => {
  return (
    <div className='heading-section'>
      <h1>{children}</h1>
    </div>
  )
}

export default HeadingSection


import React from 'react'
import './sections-wrapper.css'

const SectionsWrapper = (props) => {
  return (
    <div className='sections-wrapper'>
      {props.children}
    </div>
  )
}

export default SectionsWrapper


import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import './custom-select.css'

const CustomSelect = ({ children, itemIndex, selectR }) => {

  const [items, setItems] = useState(children)
  const [listOpened, setListOpend] = useState(false)

  return (
    <div className='custom-select'>
      <div className='selected-option'>
        {items[itemIndex]}
      </div>
      <FaAngleDown 
      className={`arrow-down ${listOpened ? 'rotate-arrow': ''}`}
      onClick={() => setListOpend(prevState => !prevState)} 
      />
      <div className={`options-list ${listOpened ? 'opened' : ''} ${children.length > 5 ? 'auto' : ''}`}>
        {items.filter(item => item !== items[itemIndex])}
      </div>
    </div>
  )
}

export default CustomSelect


import React from 'react'
import { Categories, Collections, Container } from '../containers'
import './categories-collections.css'

const CategoriesCollections = () => {
  return (
    <div className='categories-collections'>
      <Container>
         <Categories />
         <Collections />
      </Container>
    </div>
  )
}

export default CategoriesCollections
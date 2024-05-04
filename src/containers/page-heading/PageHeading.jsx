

import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Container } from '../containers'
import { BorderedButton, SecondaryButton } from '../../components/components'
import './page-heading.css'

const PageHeading = ({ children, sectionName, heading3, heading1, btnsShown, styles }) => {
  return (
    <div className='page-heading' style={styles}>
      <Container>
         <div className='page-heading__content'>
            <h3>{heading3}</h3>
            <h1>{heading1}</h1>
            <p><span>Home<FaAngleRight className='icon' /></span> {sectionName}</p>
            {btnsShown &&
            <div className='page-heading__btns'>
               <SecondaryButton>Explore Our Items</SecondaryButton>
               <BorderedButton>Create Your NFT</BorderedButton>
            </div>}
         </div>
      </Container>
      {children}
    </div>
  )
}

export default PageHeading
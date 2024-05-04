

import React from 'react'
import { CreateNFT, PageHeading, ItemDetails } from '../containers/containers'

const Details = () => {
  return (
    <>
     <PageHeading 
       heading1={'VIEW ITEM DETAILS'}
       heading3={'Liberty NFT Market'}
       sectionName={'Item Details'}
       btnsShown={true}
     />
     <ItemDetails />
     <CreateNFT />
    </>
  )
}

export default Details
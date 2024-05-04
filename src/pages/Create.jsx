
import React from 'react'
import { ApplyForItem, ItemPreview, PageHeading, SectionsWrapper } from '../containers/containers'

const Create = () => {
  return (
    <>
     <PageHeading 
       sectionName={' Create Yours'}
       heading3={'Liberty NFT Market'}
       heading1={'CREATE YOUR NFT NOW.'}
       btnsShown={true}
     />
     <SectionsWrapper>
      <ApplyForItem />
      <ItemPreview />
     </SectionsWrapper>
    </>
  )
}

export default Create
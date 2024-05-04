
import React from 'react'
import { CreateNFT, PageHeading, AuthorPage } from '../containers/containers'

const Author = () => {
  return (
    <>
      <PageHeading 
        sectionName={'Author'} 
        heading1={'VIEW DETAILS FOR AUTHOR'} 
        heading3={'Author Details'} 
        btnsShown={true} 
      />
      <AuthorPage />
      <CreateNFT />
    </>
  )
}

export default Author
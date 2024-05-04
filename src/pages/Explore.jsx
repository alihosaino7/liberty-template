

import React from 'react'
import { PageHeading, DiscoverItems, TopSellers} from '../containers/containers'
import { Author, CustomSlider } from '../components/components'
import featuredExploreItems from '../data/featuredExploreData'
import authorImage from '../assets/current-04.jpg'


const Explore = () => {

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
       breakpoint: 991,
       settings: {
          slidesToShow: 2,
       }
      },
      {
       breakpoint: 767,
       settings: {
          slidesToShow: 1,
       }
      }
    ]
   }

  return (
    <>
    <PageHeading 
      styles={{paddingBottom: '0px'}}
      sectionName={'Explore'} 
      heading1={'DISCOVER SOME TOP ITEMS'} 
      heading3={'Liberty NFT Market'} 
      btnsShown={false}>
      <CustomSlider settings={settings} className='page-heading__slider'>
        {featuredExploreItems.map(item => {
          const { id, image, title } = item
          return (
            <div className='page-heading__explore-item'>
                <img src={image} alt={`image ${id}`} />
                <div className='hover-effect'>
                  <div className='content'>
                      <h3>{title}</h3>
                      <Author img={authorImage} authorAccount={'@libertyart'} authorName={'Liberty Artist'} />
                  </div>
                </div>
            </div>
          )
        })}
      </CustomSlider>
    </PageHeading>
    <DiscoverItems />
    <TopSellers />
    </>
  )
}

export default Explore
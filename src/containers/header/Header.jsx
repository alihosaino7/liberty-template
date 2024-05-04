

import React from 'react'
import { Container } from '../containers'
import { BorderedButton, CustomSlider, SecondaryButton } from '../../components/components'
import banner01 from '../../assets/banner-01.png'
import banner02 from '../../assets/banner-02.png'
import './header.css'

const Header = () => {
  
  let settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='header'>
      <Container>
      <div className='header__text'>
        <h3>Liberty NFT Market</h3>
        <h1>CREATE, SELL & COLLECT TOP NFT’S.</h1>
        <p>
          Liberty NFT Market is a really cool and professional design for your NFT websites.
          This HTML CSS template is based on Bootstrap v5 and it is designed for NFT related web portals.
          Liberty can be freely downloaded from TemplateMo's free css templates.
        </p>
        <div className='header__text__btns'>
          <BorderedButton>Explore Top NFTs</BorderedButton>
          <SecondaryButton>Watch Our Videos</SecondaryButton>
        </div>
      </div>
      <CustomSlider className='header-slider' settings={settings}>
        <div><img src={banner01} alt='/' /></div>
        <div><img src={banner02} alt='/' /></div>
      </CustomSlider>
      </Container>
    </div>
  )
}

export default Header
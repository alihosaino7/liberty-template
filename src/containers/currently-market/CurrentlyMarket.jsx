

import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HeadingSection, Author, CustomSelect } from '../../components/components'
import { Container } from '../containers'
import currentlyMarketData from '../../data/currentlyMarketData'
import list from '../../data/currentlyMarketListData'
import marketImage from '../../assets/market-01.jpg'
import authorImage from '../../assets/current-04.jpg'
import './currently-market.css'

const CurrentlyMarket = () => {

  const [index, setIndex] = useState(0)

  const listRef = useRef()
  const [filteredItems, setFilterdItems] = useState(currentlyMarketData)

  function handleActive(e) {
    [...listRef.current.children].forEach(item => {
      item.classList.remove('active')
    })
    e.target.classList.add('active')
    if (e.target.innerHTML !== 'All Items') {
      setFilterdItems(currentlyMarketData
        .filter(item => item.category === e.target.innerHTML))
    } else {
      setFilterdItems(currentlyMarketData)
    }
  }

  return (
    <div className='currently-market'>
      <Container>
         <div className='currently-market__header'>
            <HeadingSection><span>items</span> currently in the market</HeadingSection>
            <ul className='currently-market__header_list' ref={listRef}>
              {list.map((item, index) => {
                if (index === 0) {
                  return <li className='active' key={item.id} onClick={e => handleActive(e)} >{item.text}</li>
                } else {
                  return <li key={item.id} onClick={e => handleActive(e)} >{item.text}</li>
                }
              })}
            </ul>
            <CustomSelect itemIndex={index}>
              {list.map((item, i) => {
                return (
                  <div 
                  key={item.id} 
                  className='option'
                  onClick={(e) => {
                    setIndex(i)
                    handleActive(e)
                  }}
                  >
                    {item.text}
                  </div>
                )
              })}
            </CustomSelect>
         </div>
         <div className='currently-market__items'>
          {filteredItems.map(item => {
            const { id, heading, dollar, ethereum, date, time } = item
            return (
              <div className='currently-market__item' key={id} >
                <div className='currently-market__item__market-image'>
                  <img src={marketImage} alt='/' />
                </div>
                <div className='currently-market__item__content'>
                  <div className='currently-market__item__content-header'>
                    <h3>{heading}</h3>
                    <Author img={authorImage} authorAccount={'@libertyart'} authorName={'Liberty Artist'} />
                  </div>
                  <div className='currently-market__item__content-body'>
                    <div className='currently-market__item__content-body__col-1'>
                      <p>Current Bid</p>
                      <h3>{ethereum}</h3>
                      <p>({dollar})</p>
                    </div>
                    <div className='currently-market__item__content-body__col-2'>
                      <p>Ends In</p>
                      <h3>{time}</h3>
                      <p>{date}</p>
                    </div>
                  </div>
                  <Link to='/details' className='currently-market__link'>View Item Details</Link>
                </div>
              </div>
            )
          })}
         </div>
      </Container>
    </div>
  )
}

export default CurrentlyMarket
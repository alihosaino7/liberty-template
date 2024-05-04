
import React, { useState, useEffect, useRef } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import navbarLogo from '../../assets/logo.png'
import './navbar.css'

const CustomLink = ({ to, children }) => {
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({path: resolvedPath.pathname, end: true})
   return (
      <li className={`${isActive ? 'active' : ''}`}>
         <Link to={to}>{children}</Link>
      </li>
   )
}

const Navbar = () => {
   
  const [isNavbarSticky, setIsNavbarSticky] = useState(false)
  const linksRef = useRef(null)

  useEffect(() => {
   window.onscroll = () => {
      if (window.scrollY >= 20) {
         setIsNavbarSticky(true)
      } else {
         setIsNavbarSticky(false)
      }
   }
  }, [])

  function showNavbar() {
   linksRef.current.classList.toggle('show')
  }

  return (
   <nav className={`navbar ${isNavbarSticky ? 'navbar--sticky' : ''}`}>
      <div className='navbar__logo'>
         <img src={navbarLogo} alt='logo' />
      </div>
      <div className='navbar-toggler' onClick={showNavbar}>
         <FaBars />
      </div>
      <ul className='navbar__links' ref={linksRef}>
         <CustomLink to='/'>Home</CustomLink>
         <CustomLink to='/explore'>Explore</CustomLink>
         <CustomLink to='/details'>Item Details</CustomLink>
         <CustomLink to='/author'>Author</CustomLink>
         <CustomLink to='/create'>Create Yours</CustomLink>
      </ul>
   </nav>
  )
}

export default Navbar
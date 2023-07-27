import React from 'react'
import { NavLink } from 'react-router-dom'
import '../ReactRouterDom.css'

const Navbar = () => {
  return (
    <nav>
        <NavLink to='/' className='navLink'>home</NavLink>
        <NavLink to='/about' className='navLink'>about</NavLink>
        <NavLink to='/contact' className='navLink'>contact</NavLink>
        <NavLink to='/blog' className='navLink'>blog</NavLink>      
    </nav>
  )
}

export default Navbar

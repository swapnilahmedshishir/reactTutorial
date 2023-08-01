import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../ReactRouterDom.css'
import { Button } from 'react-bootstrap'

const Navbar = (props) => {
  
  const [isLogged , setIsLogged] = useState(false);
  const handleLog = () => {
    setIsLogged(!isLogged)
    props.isLoggData(isLogged)
  }
  return (
    <nav>
        <NavLink to='/' className='navLink'>home</NavLink>
        <NavLink to='/about' className='navLink'>about</NavLink>
        <NavLink to='/contact' className='navLink'>contact</NavLink>
        <NavLink to='/blog' className='navLink'>blog</NavLink> 
        <NavLink to='/user' className='navLink'>user</NavLink> 
        <Button onClick={handleLog}>
          {isLogged?'Log Out' : "Log In"}
        </Button>

    </nav>
  )
}

export default Navbar

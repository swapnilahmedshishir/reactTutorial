import React from 'react'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutUspage from './Pages/AboutUspage'
import ConatctUspage from './Pages/ConatctUspage'
import Blogpage from './Pages/Blogpage'
import Navbar from './Navbar/Navbar'
import Blog from './Pages/Blog/Blog'

const ReactRouterDom = () => {
  return (
    <Router>
      <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<HomePage/>}></Route>
            <Route path='/home' element={<HomePage/>}></Route>
            <Route path='/about' element={<AboutUspage/>}></Route>
            <Route path='/contact' element={<ConatctUspage/>}></Route>
            <Route path='/blog' element={<Blogpage/>}></Route>
            <Route path='/blog/:title' element={<Blog/>}></Route>
        </Routes>
    </Router>
  )
}

export default ReactRouterDom

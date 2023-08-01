import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutUspage from './Pages/AboutUspage'
import ConatctUspage from './Pages/ConatctUspage'
import Blogpage from './Pages/Blogpage'
import Navbar from './Navbar/Navbar'
import Blog from './Pages/Blog/Blog'
import User from './Pages/QueryParameter/User'
import Protected from './Navbar/ProtectedRouter'

const ReactRouterDom = () => {
  const [isLogg , setIsLogg] = useState(false)
  const isLoggData =(data) => {
    setIsLogg(data)
  }
// console.log(isLogg);
  return (
    <Router>
      <Navbar isLoggData={isLoggData}></Navbar>
        <Routes>
          <Route exact path='/' element={<HomePage/>}></Route>
            <Route path='/home' element={<HomePage/>}></Route>
            <Route path='/about' element={<AboutUspage/>}></Route>
            <Route
          path="/contact"
          element={
            <Protected loggDate={isLogg}>
              <ConatctUspage />
            </Protected>
          }
        />
            <Route path='/blog' element={<Blogpage/>}></Route>
            <Route path='/blog/:title' element={<Blog/>}></Route>
            {/*query parameter */}
            <Route path='/user' element={<User/>}></Route>
        </Routes>
    </Router>
  )
}

export default ReactRouterDom

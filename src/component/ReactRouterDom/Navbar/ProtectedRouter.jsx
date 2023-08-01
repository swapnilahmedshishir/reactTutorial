import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({loggDate, children}) => {
    console.log(loggDate);
  if (!loggDate) {
    return <Navigate to='/' replace/>
  }
  return children;
}

export default Protected

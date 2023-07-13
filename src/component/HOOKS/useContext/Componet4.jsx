import React, { useContext } from 'react'
import { UserContext } from './userContext'

const Componet4 = () => {
  const {user, country} = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1>ID:{user.id}</h1>
      <h1>Name: {user.name}</h1>
      <h1>Country: {country.name}</h1>
    </div>
  )
}

export default Componet4

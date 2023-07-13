import React, { useState } from 'react'
import { UserContext } from './userContext'
import Componet1 from './componet1'

const ParentComponet = () => {

    const [user, setUser] = useState({
        id:1001, name:"swapnil ahmed shishir"
    })
    const [country, setCountry] = useState({
        name:'bangladesh'
    })
  return (
    <UserContext.Provider value={{user , country}}>
     <Componet1></Componet1>
    </UserContext.Provider>
  )
}

export default ParentComponet

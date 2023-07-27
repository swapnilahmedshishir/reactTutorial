import React, { useState } from 'react'
import Users from './UserComponent/Users';

const MangementApp = () => {
    const [user , setUser] = useState([
       { id:1, userName:"swapnil"},
        {id:2, userName:'ahmed'},
        {id:3, userName:'shishir'},
        {id:4, userName:'shakib al hasan'},
       { id:5 , userName:'miraz'}
    ])
    const handleDeleteUser = (id) => {
      console.log(id);
    }
  return (
    <div>
      <Users users={user}></Users>
    </div>
  )
}

export default MangementApp

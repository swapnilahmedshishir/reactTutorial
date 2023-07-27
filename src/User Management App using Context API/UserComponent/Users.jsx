import React from 'react'
import User from './User';
import '../MangementApp.css'

const Users = ({users}) => {
   
  return (
    <div className='users'>
      {users.map(user => <User key={user.id} user={user}></User>)}
    </div>
  )
}

export default Users

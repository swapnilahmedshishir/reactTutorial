import React from 'react'
import '../MangementApp.css';
const User = ({user}) => {
    // console.log(user);
    const {id, userName} = user;
    const handleDelete =(id) =>{
        console.log(id);
    }
  return (
    <div className='user'>
      <h2>{id}</h2>
      <p>{userName}</p>
      <button onClick={()=>{handleDelete (id)}}>Delete</button>
    </div>
  )
}

export default User

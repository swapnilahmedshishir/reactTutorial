import React, { useRef, useState } from 'react'

export default function UserFrom() {
 

  const userNameRef = useRef();
  const userEmaiRef = useRef();
  const userPasswordRef = useRef();

  

  const MyForm = (e) => {

    const userName = userNameRef.current.value;
    const userEmail = userEmaiRef.current.value;
    const userPassword = userPasswordRef.current.value;
    e.preventDefault();
    console.log(userName,userEmail, userPassword);

  }  
  
  
 
  
  return (
    <form onSubmit={MyForm}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          ref={userNameRef}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          ref={userEmaiRef}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          ref={userPasswordRef}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>

    
  )
}

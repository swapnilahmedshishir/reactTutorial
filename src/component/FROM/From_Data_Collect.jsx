import React, { useState } from "react";

export default function From_Data_Collect() {
    const [formData , setFormData] = useState({
        name : '',
        email:'',
        password:''
    });
    const { name, email, password } = formData;

  const handleChange = (e) => {
    setFormData({...formData , [e.target.name] : e.target.value});
    // e.stopPropagation();
  };

  const handleSubmite = (e) => {
   console.log(formData);
    e.preventDefault();
  }
  
  return (
    <div>
      
        <form onSubmit={handleSubmite}>
          <label htmlFor="text">Name: </label>
          <input type="text" name="name" value={name} onChange={handleChange} />
          <br />
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" value={email} onChange={handleChange} />
          <br />
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" value={password} onChange={handleChange} />
          <br />
          <button type="submit" >Submit</button>
        </form>
      
    </div>
  );
}

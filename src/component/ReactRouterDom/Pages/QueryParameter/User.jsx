import { Form } from 'formik';
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Pagetitle from '../../Helmet/pagetitle';

const User = () => {
    const [searchParams, setSearchParms] = useSearchParams();
    // console.log(searchParams.get('id'))
    const [name , setName ] = useState('');
    const handleSubmit = (e) => {
        setSearchParms({name:name})
        e.preventDefault();
    }
  return (
    <div>
      <Pagetitle title={'user page'}/>
      <h1>user</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" value={name} onChange={(e) => {setName(e.target.value)}}/>
        <button type="submit">Find User</button>
      </form>
    </div>
  )
}

export default User

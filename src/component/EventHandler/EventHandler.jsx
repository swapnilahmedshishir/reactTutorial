import React, { useState } from 'react'

export default function EventHandler() {
  const [value , setValue] = useState('')
  
    const eventHandler_value= (event)=>{
        setValue(event.target.value);
  }  
  console.log(value);
    return (
    <div>
        <input type='text' onChange={eventHandler_value}></input>
        <p>{value}</p>
    </div>
  )
}

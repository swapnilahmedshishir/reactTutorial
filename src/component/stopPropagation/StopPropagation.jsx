import React from 'react'
import { Button } from 'react-bootstrap'

export default function StopPropagation() {
  const parentHandle = (event) =>{
    console.log("event parent" , event);
  }

  const childrenHandel = (event) => {
    event.stopPropagation();
    console.log("event child" , event);
  }
  
  
    return (
    <div className='parentItem' onClick={parentHandle}>
        <h1>Now Learning Event Bubbling | stopPropagation</h1>
        <Button onClick={childrenHandel}>Child button</Button>
    </div>
  )
}

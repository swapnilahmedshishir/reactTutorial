import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

export default function state() {
        const [state, setState]= useState(0);


    const increment = () => {
        
        setState(state + 1 ) 
    }
    const decrement = () => {
        setState(state - 1 ) 
    }
  return (
    <div>
        <h1>count:{state}</h1>
        <Button onClick={increment} variant="success" className='increment'>+</Button>{' '}
      <Button onClick={decrement} variant="warning" className='decrement' disabled={state === 0 ? true : false}>-</Button>{' '}
    </div>
  )
}

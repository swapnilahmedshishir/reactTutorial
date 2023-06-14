import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

export default function UpadateState() {
        const [state, setState]= useState(0);


    const increment = () => {
        
        setState((state) => state + 1 ); //0+1=1
        setState((state)=>state+1); //1+1=2
        setState((state) => state+1)//2+1=3
    }

    const decrement = () => {
        setState((state) => state - 1 ); //0-1=-1
        setState((state)=>state-1); //-1-1= -2
        setState((state) => state-1)//-2-1=-3
    }
  return (
    <div>
        <h1>count:{state}</h1>
        <Button onClick={increment} variant="success" className='increment'>+</Button>{' '}
      <Button onClick={decrement} variant="warning" className='decrement' disabled={state === 0 ? true : false}>-</Button>{' '}
    </div>
  )
}

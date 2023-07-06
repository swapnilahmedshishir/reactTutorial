import React from 'react'
import { Button } from 'react-bootstrap';

const Country = (props) => {
  const handleCountryRemove = (name) =>{
    props.onCountryRemove(name)
  }
    
    const {name,flags,capital,population, area} = props.country;
  return (
    <article className='country_card'>
        <div className='country'>
            <img className='flag' src={flags.png} alt={name.common}/>
            <h4>Name: {name.common}</h4>
            <h4>Capital: {capital}</h4>
            <h4>Population: {population}</h4>
            <h4>Area: {area}</h4>
            <Button className='btn' onClick={()=>{handleCountryRemove(name.common)}}>Remove Country</Button>
        </div>  
      
    </article>
  )
}

export default Country

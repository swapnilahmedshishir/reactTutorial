import React from 'react'
import Country from './Country';
import {v4 as uuidv4} from 'uuid';

function Countries(props) {
  // console.log(props);
    
  return (
    <section className='countries'>
      {
        props.countries.map((country) => {
            const countryNew = {country , id:uuidv4()}

            return <Country {...countryNew} key={countryNew.id} onCountryRemove={props.onCountryRemove}></Country>
        })
      }
    </section>
  )
}

export default Countries

import React, { useEffect, useState } from 'react'
import Countries from './Countries';

function Countrys_Main_App() {
  const url = 'https://restcountries.com/v3.1/all';
  
  const [countries, setCountries] = useState([]);
  const [inLodingData , setInLodingData] = useState(true);
  const [error , setError] = useState(null)

  const fetchData = async (url) => {
    setInLodingData(true)
    try {
         const res = await fetch(url);
        const data = await res.json();
        setCountries(data);
        setInLodingData(false);
        setError(null);
    } catch (error) {
        setInLodingData(false);
        setError(error);
    }
  }

  useEffect(() => {
    fetchData(url)
    
  },[])

    return (
    <div>
      <h1>Country App</h1>
      {inLodingData && <h3>Please! Wait data Loading ...</h3>}
      {error && <h3>{error.message}</h3>}
      {countries && <Countries countries={countries}></Countries>}
    </div>
  )
}

export default Countrys_Main_App

import React, { useEffect, useState } from 'react'
import Countries from './Countries';
import './Country_App.css';
import Serach from './Serach';

function Countrys_Main_App() {
  const url = 'https://restcountries.com/v3.1/all';
  
  const [countries, setCountries] = useState([]);
  const [inLodingData , setInLodingData] = useState(true);
  const [error , setError] = useState(null)
  const [filterCountyData , setFilterCountryData] = useState(countries)

  const fetchData = async (url) => {
    setInLodingData(true)
    try {
         const res = await fetch(url);
        const data = await res.json();
        setCountries(data);
        setFilterCountryData(data)
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

  const handleCountryRemove = (name) =>{
    const filter = filterCountyData.filter((country) => country.name.common !== name)
    setFilterCountryData(filter)
  }
  
  const serchCountry= (searchVlaue) => {
    const values = searchVlaue.toLowerCase();
    const filter = countries.filter((country) =>{
      const countyName =  country.name.common.toLowerCase();
      return countyName.startsWith(values);
    });
   setFilterCountryData(filter)
  }

    return (
    <div className='country_app'>
      <h1>Country App</h1>
      <Serach onserchCountry={serchCountry}></Serach>
      {inLodingData && <h3>Please! Wait data Loading ...</h3>}
      {error && <h3>{error.message}</h3>}
      {countries && <Countries onCountryRemove={handleCountryRemove} countries={filterCountyData}></Countries>}
    </div>
  )
}

export default Countrys_Main_App

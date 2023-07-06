import React, { useEffect, useState } from 'react'

function Serach(props) {

    const [searchText , setSearchText] = useState('');
    const handleSearchTxt = (e) => {
        setSearchText(e.target.value);        
    };

    useEffect(()=>{
        props.onserchCountry(searchText)
    },[searchText]);

  return (
    <div className='search'>
      <input type="text" value={searchText} onChange={handleSearchTxt} name="" id="" placeholder='Search Country' />
    </div>
  )
}

export default Serach

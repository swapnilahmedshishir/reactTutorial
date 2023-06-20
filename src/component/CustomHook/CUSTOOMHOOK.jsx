import React, { useEffect, useState } from 'react'
import useHook from './useHook';


const CUSTOOMHOOK = () => {

    const {data,loadingData,error} = useHook('https://jsonplaceholder.typicode.com/todos')
    

    
  return (
    <div   >
        {
            loadingData && <p>Please Wait date is loading ...</p>
        }
        {
            error && <p>{error}</p>
        }
        {
            data && data.map((dt) =><p key={dt.id}>{dt.title}</p>)
            
        }
      
    </div>
  )
}

export default CUSTOOMHOOK

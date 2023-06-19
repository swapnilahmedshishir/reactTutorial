import React, { useEffect, useState } from 'react'

const useHook = (url) => {

    const [data, setData] = useState(null);
    const [loadingData, setLoadingData] =useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
       setTimeout(() => {
        fetch(url)
        .then((res) => {
            if(!res.ok){
                throw Error('Data fatching is poblem');
            }else{
                return res.json();
            }            
        })
        .then((data) => {
            setData(data);
            setLoadingData(false);
            setError(null)
        })
        .catch((error) => {
            setError(error.message);
            setLoadingData(false)
        })
       },2000)
    },[url])





  return {data,loadingData,error}
}

export default useHook

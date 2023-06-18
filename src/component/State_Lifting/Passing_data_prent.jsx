import React, { useState } from 'react'
import { Passing_data_child_prent } from './Passing_data_child'
import { Button } from 'react-bootstrap';

export const Passing_data_prent = () => {
    const [son, setSon] = useState(false);
    
    const recivedChild = (Dad) =>{
        console.log(Dad);
    }
    
    const comeMySon = ()=>{
        setSon(!son);
        console.log(son);
    }

  return (
    <div style={{marginLeft:"30px"}}>
        <h2>HI my son I am your prents</h2>
        <Button onClick={comeMySon} variant='success'>{son?"Go to my son":"Come here my son" }</Button>
        {son ? (
        <Passing_data_child_prent parentData={recivedChild} />
      ) : null
      
      }
        

    </div>
  )


  /*{
        most importent in this module passing data child to parent . 
        [parent declear a on method and send child props , recvied child props and send 
        you importent date   ]
        example : parent date{

            const recivedChild = (Dad) =>{
             console.log(Dad);
              }

            <Passing_data_child_prent parentData={recivedChild}/>
              
    }
    child date{      
      props.parentData(data)
     
    }
    }

    }*/
}

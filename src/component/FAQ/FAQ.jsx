import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './faqs.css';
export const FAQ = ({id, title, desc}) => {

    const [toggle , setToggle ] = useState(false);

  return (
    <article className='faq'>
        <div>
            <h4>{title}</h4>
            <Button variant='success' onClick={() => setToggle(!toggle)}>
                {
                    toggle ? '-': '+'
                }
            </Button>
        </div>
       <div className='faqDescript'>
       {toggle && <p>{desc}</p> } 
       </div>
    </article>
  )
}

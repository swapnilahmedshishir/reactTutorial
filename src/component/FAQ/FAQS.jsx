import React, { useState } from 'react'
import {faqsData} from './faqData';
import { FAQ } from './FAQ';

export const FAQS = () => {
    const [faqs, setFaqs] = useState(faqsData);

    
  return (
    <main className='container'>
        <section className='faqs'>
            {
            faqs.map((faq) => 
            <FAQ key={faq.id}{...faq}></FAQ>
            )}
            
        </section>
        
    </main>
  )
}

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../ReactRouterDom.css'
import Pagetitle from '../Helmet/pagetitle';

const Blogpage = () => {
  const [data, setData] = useState(null);

  
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2023-07-26&to=2023-07-26&sortBy=popularity&apiKey=aef775d85f034dea9890d78614bf3091'); 
        const data = await response.json();
        setData(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []);  

  console.log(data)

  const trunkSting = (str, num )=> {
    if(str.length > num ){
      return str.slice(0,num) + '...'
    }else{
      return str
    }
  }
    return (
    <div>
      <Pagetitle title={'Blog Page'}/>
      <h1>Blog  page</h1>
      <section>          
      {data ? (
        data.articles.map((blog) => {
          const {title ,description ,urlToImage} = blog;
          // Render your blog data here using JSX
          return (
          <article key={blog.id}>
            <h4>{title}</h4>
            <br/>
            <br/>
            <p>{trunkSting(description , 100)}  <Link to={`/blog/${title}`} >learn more</Link></p>   
           
            </article>
          
          ) // Replace with your actual rendering logic
        })
      ) : (
        <h1>Blog Loading...</h1>
      )}
      </section>

     </div>
  )
}

export default Blogpage

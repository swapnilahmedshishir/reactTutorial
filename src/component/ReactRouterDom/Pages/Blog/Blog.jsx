import React, { useState ,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Pagetitle from '../../Helmet/pagetitle';

const Blog = () => {
    const {title} = useParams();
    const [blogDeta, setBlogDeta] = useState(null);
    const [blogs, setBlogs] = useState(null);

  
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2023-07-26&to=2023-07-26&sortBy=popularity&apiKey=aef775d85f034dea9890d78614bf3091'); 
        const data = await response.json();
       const matchDate = await data.articles.filter((blog) => blog.title === title);
       setBlogs(matchDate)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []);  
//   const {description,content,urlToImage,url} = blogs[0];
    // console.log(blogs[0].content);
  return (
    <div className='container p-5'>
      <Pagetitle title={'Blog post'}/>
      <h1 className='p-5'>{title}</h1>      
      {blogs ? (
        <div>
            <img src={blogs[0].urlToImage}/>
            <p className='p-4'>{blogs[0].description}</p>
            <p className='p-4'>{blogs[0].content} <Link to={blogs[0].url} target='_blank'>See Details</Link></p>
            
        </div>
      ): (
        <h1>Blog Loading...</h1>
      )}
    </div>
  )
}

export default Blog

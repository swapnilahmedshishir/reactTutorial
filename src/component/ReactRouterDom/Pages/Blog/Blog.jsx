import React, { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
    <div>
      <h1>{title}</h1>      
      {blogs ? (
        <div>
            <img src={blogs[0].urlToImage}/>
            <p>{blogs[0].description}</p>
            <p>{blogs[0].content}</p>
        </div>
      ): (
        <h1>Blog Loading...</h1>
      )}
    </div>
  )
}

export default Blog

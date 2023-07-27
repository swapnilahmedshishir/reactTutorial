import { Button } from 'react-bootstrap'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutUspage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>About us page</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi vero aliquid suscipit pariatur officia. Dolorum minima alias dolor quasi nisi iste harum placeat sed facilis quibusdam sequi voluptatibus natus, adipisci animi exercitationem sapiente quam, aliquam eligendi totam reiciendis nesciunt quidem delectus amet. Fuga rem voluptates autem temporibus soluta tempora aliquam.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi explicabo eius praesentium suscipit earum consequatur quis, fugit distinctio rem optio.</p>
        <Button variant='success' onClick={()=> {navigate('/')}}>Go to Home</Button>
    
    </div>
  )
}

export default AboutUspage

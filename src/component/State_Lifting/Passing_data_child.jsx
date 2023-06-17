import React from 'react'
const data = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm8xM2VscXo3MzJvNmppcHB2anBuNWZub3V1YnlybG1vOGF1NTFibCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3owyoQW2C1n17BQwVy/giphy.gif';
export const Passing_data_child_prent = (props) => {
  console.log();
   
  return (
    <div>
      <h2>OH! my Dad I am coming </h2>
      <img src={data}/>
      
      
      
      {
      
      props.parentData(data)
      
      }
      
      
      </div>

  )
}

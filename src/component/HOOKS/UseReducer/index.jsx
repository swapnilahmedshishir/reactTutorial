import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

// useReducer in deffentc useState 
const booksData = [
    {id:1, name : ' pather panchail'},
    {id:2, name : ' Padma Nadir Majhi'},
    {id:3, name : ' sharikhata'},
    {id:4, name : ' pathepanchailr '}
]
 const Modal = ({modalText}) => {
    return(
        <p style={{color:'green'}}>{modalText}</p>
    )
 }
const UseReducer = () => {
    const [books, setBooks] = useState(booksData);
    const [isModalOpen , setModalOpen] = useState(false);
    const [modalText , setModalText] = useState('');
    const [booksName , setBooksName] = useState('');
    
    const handleAddBook = (e) =>{
        
        setBooks((preState) => {
            const newBook = {id:uuidv4(), name:booksName};
            return [...preState , newBook]
        })
        setModalOpen(true);
        setModalText('Books add a successful');
        e.preventDefault();
       
    }
    console.log(books);
  return (
    <div>
        <h3>Books List </h3>
        <form onSubmit={handleAddBook} >
            <input type="text" onChange={(e) => {setBooksName(e.target.value)}} />
            <button type="submit">Add books</button>
        </form>
        {
            isModalOpen && <Modal modalText={modalText}></Modal>
        }
        {
            books.map((book) => {
                const {id, name} = book;
                return <li key={id}>{name}</li>
            })
        }
    </div>
  )
}

export default UseReducer

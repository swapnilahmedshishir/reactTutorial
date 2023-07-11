import React, { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// replace in useReducer

const booksData = [
  { id: 1, name: " pather panchail" },
  { id: 2, name: " Padma Nadir Majhi" },
  { id: 3, name: " sharikhata" },
  { id: 4, name: " pathepanchailr " },
];
const Modal = ({ modalText }) => {
  return <p style={{ color: "green" }}>{modalText}</p>;
};
const reducer = (state, action) => {
  // action.type , action.payloda
  if (action.type == "ADD") {
    const newBooksList = [...state.books, action.payload];
    return {
      ...state,
      books: newBooksList,
      isModalOpen: true,
      modalText: "Books is Added",
    };
  }

  if (action.type == "REMOVE") {
    const filterBook = [...state.books].filter(
      (bk) => bk.id !== action.payload
    );
    console.log(filterBook);
    return {
      ...state,
      books: filterBook,
      isModalOpen: true,
      modalText: "Books is remove",
    };
  }

  return state;
};

const UseReducerMain = () => {
  const initialState = {
    books: booksData,
    isModalOpen: false,
    modalText: "",
  };
  const [bookState, dispatch] = useReducer(reducer, initialState);

  const [bookName, setBookName] = useState("");

  const handleAddBook = (e) => {
    const newBook = { id: uuidv4(), name: bookName };

    dispatch({ type: "ADD", payload: newBook });
    setBookName("");

    e.preventDefault();
  };
  const removeBooks = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <div>
      <h3>Books List </h3>
      <form onSubmit={handleAddBook}>
        <input
          type="text"
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <button type="submit">Add books</button>
      </form>
      {bookState.isModalOpen && <Modal modalText={bookState.modalText}></Modal>}
      {bookState.books.map((book) => {
        const { id, name } = book;
        return (
          <li key={id}>
            {name} <button onClick={() => removeBooks(id)}>Remove</button>
          </li>
        );
      })}
    </div>
  );
};

export default UseReducerMain;

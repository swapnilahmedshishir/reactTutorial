import React, { useEffect, useState } from "react";

export const UseEffect = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTodos(data);
      });
  }, []);
  console.log(todos);

  return (
    <div>
      <h1>Now Learning useEffect </h1>
      { todos &&
        todos.map((todo) => {
            return <div>
                <p><span>{todo.id}. </span> {todo.title}</p>
            </div>
        })
      }
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TodoList() {
  const [myTodos, setMyTodos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((todolist) => setMyTodos(todolist));
  }, []);

  const handleClick = (id) => {
    navigate(`/${id}`);
  }

  return (
    <div>
      {myTodos.map((todo) => (
        <p onClick={() => handleClick(todo.id)}>{todo.title}</p>
      ))}
    </div>
  );
}

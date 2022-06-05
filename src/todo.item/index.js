import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function TodoItem() {
  const { id } = useParams();
  const [myTodo, setMyTodo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((todo) => setMyTodo(todo));
  }, []);

  if (!myTodo) {
    return "Loading";
  }

  return (
    <div>
      <p>{myTodo.title}</p>
      <p>{myTodo.completed ? "Done" : "Not Done"}</p>
    </div>
  );
}

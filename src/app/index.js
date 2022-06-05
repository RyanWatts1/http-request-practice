import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "../todo.list";
import TodoItem from "../todo.item";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/:id" element={<TodoItem />} />
      </Routes>
    </Router>
  );
}

export default App;

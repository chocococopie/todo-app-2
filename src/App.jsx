import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState(() => {
    const saved = localStorage.getItem("todoList");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTodo([...todo, input]);
    setInput("");
  }

  function handleDelete(i) {
    const uptatedTodo = todo.filter((todo, index) => index != i);
    setTodo(uptatedTodo);
  }

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Type a task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todo.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

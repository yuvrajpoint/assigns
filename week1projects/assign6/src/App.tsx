import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();
    if (task.trim() === "") return;

    const newTodos = [...todos, task.trim()];
    newTodos.sort(); // Ascending order
    setTodos(newTodos);
    setTask(""); // Clear input
  };

  const handleDeleteTask = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={task.trim() === ""}>
          Add
        </button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

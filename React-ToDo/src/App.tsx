import { ReactNode, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Make this",
      check: true,
    },
  ]);

  const [title, setTitle] = useState("Awesome");

  function handleAdd() {
    setTodos([...todos, { title, check: false }]);
  }

  function handleDelete(index: number) {
    const newTodos = todos.filter((_c, i) => i !== index);
    setTodos(newTodos);
  }

  function handleToggleCheck(index: number) {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, check: !todo.check } : todo
    );
    setTodos(updatedTodos);
  }

  return (
    <>
      <div>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button onClick={handleAdd}>Add</button>
        <div className="todo-box">
          {todos.map((todo, index) => (
            <div className="todos" key={index}>
              <h2
                style={{
                  textDecoration: todo.check ? "line-through" : "none",
                }}
              >
                {todo.title}
              </h2>
              <input
                type="checkbox"
                checked={todo.check}
                onChange={() => {
                  handleToggleCheck(index);
                }}
              />
              <button onClick={() => handleDelete(index)}>Del</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

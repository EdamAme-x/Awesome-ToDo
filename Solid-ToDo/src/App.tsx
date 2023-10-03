import { createSignal, For } from "solid-js";
import "./App.css";

function App() {
  const [todos, setToDos] = createSignal([
    {
      title: "Make this",
      check: true,
    },
  ]);

  const [title, setTitle] = createSignal("Awesome");

  function Add() {
    setToDos(
      todos().concat([
        {
          title: title(),
          check: false,
        },
      ])
    );
  }

  function Del(index: number) {
    setToDos(todos().filter((_c, i) => i !== index));
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={title()}
          onInput={(e) => setTitle(e.currentTarget.value)}
        />
        <button onClick={Add}>Add</button>
        <For each={todos()}>
          {(todo, index) => {
            return (
              <div class="todo">
                <h2>{todo.title}</h2> {/* Todo line-through */}
                <input
                  type="checkbox"
                  checked={todo.check}
                  onChange={() => {
                    const updatedTodos = todos().slice();
                    updatedTodos[index()].check = !updatedTodos[index()].check;
                    setToDos(updatedTodos);
                  }}
                />
                <button
                  onClick={() => {
                    Del(index());
                  }}
                >
                  Del
                </button>
              </div>
            );
          }}
        </For>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";


export default function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    setList([...list, task]);
    setTask("");
  };

  const getTask = (e) => {
    setTask(e.target.value);
  };

  const del = (i) => {
    list.splice(i, 1);
    setList([...list]);
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="todo-input">
        <input type="text" value={task} onChange={getTask} placeholder="Add a new task..." />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="todo-list">
        {list.map((v, i) => {
          return (
            <li key={i}>
              <div>{v}</div>
              <button onClick={() => del(i)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

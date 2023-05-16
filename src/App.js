import React, { useState } from "react";

import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");
  const [progress, setProgress] = useState("not-started");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
      date: date,
      progress: progress,
    };
    if (!todo) alert("Title required");
    else if (!date) alert("Date required!");
    else setList([...list, newTodo]);
    setInput("");
    setDate("");
    setProgress("not-started");
  };

  function deletTodo(id) {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  }

  return (
    <div>
      <h1>to do list</h1>
      <lable>Title:</lable>{" "}
      <input
        type="text"
        placeholder="Title"
        required
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <div>
        {" "}
        <lable>Date:</lable>{" "}
        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        ></input>
      </div>
      <label for="progress">Progress:</label>
      <select value={progress} onChange={(e) => setProgress(e.target.value)}>
        <option value="in-progress">in-progress</option>
        <option value="done">done</option>
        <option value="not-started">not-started</option>
      </select>
      <br></br>
      <button onClick={() => addTodo(input, date, progress)}>Submit</button>
      <div className="parent">
        {list.map((todo) => {
          return (
            <div key={todo.id} className="hight">
              {todo.todo} {todo.date} {todo.progress}
              <button onClick={() => deletTodo(todo.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");
  const [progress, setProgress] = useState("Choose a status");

  function addTodo(todo) {
    const newTodo = {
      id: Math.random(),
      todo: todo,
      date: date,
      progress: progress,
    };
    if (!todo) alert("Title required");
    else if (!date) alert("Date required!");
    else if (progress === "Choose a status") alert("Choose a Status!");
    else setList([...list, newTodo]);

    setInput("");
    setDate("");
    setProgress("Choose a status");
  }

  function deletTodo(id) {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  }

  return (
    <div className="App">
      <form>
        <label>Title:</label>{" "}
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
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          ></input>
        </div>
        <label>Progress:</label>
        <select value={progress} onChange={(e) => setProgress(e.target.value)}>
          <option>Choose a status</option>
          <option value="in-progress">in-progress</option>
          <option value="done">done</option>
          <option value="not-started">not-started</option>
        </select>
      </form>
      <br></br>
      <button onClick={() => addTodo(input)}>Submit</button>
      <div className="parent">
        <h1>to do list</h1>
        {list.map((todo) => {
          return (
            <div key={todo.id} className="hight">
              <p className={todo.progress}></p> <p>{todo.todo}</p>{" "}
              <p>{todo.date}</p>{" "}
              <button onClick={() => deletTodo(todo.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

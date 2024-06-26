import React, { useState } from "react";

import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import {TextField, Typography} from "@mui/material"

import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");
  const [progress, setProgress] = useState("Status");

  function addTodo(todo) {
    const newTodo = {
      id: Math.random(),
      todo: todo,
      date: date,
      progress: progress,
    };
    if (!todo) {
      confirmAlert({
        title: "Tittle required",
        message: "Please write title for todo item.",
        buttons: [
          {
            label: "OK",
            color: "#fffccc",
          },
        ],
      });
    } else if (!date) {
      confirmAlert({
        title: "Date required",
        message: "Please select a date for todo item.",
        buttons: [
          {
            label: "OK",
            color: "#fffccc",
          },
        ],
      });
    } else if (progress === "Status") {
      confirmAlert({
        title: "Status required",
        message: "Please select a status for todo item.",
        buttons: [
          {
            label: "OK",
            color: "#fffccc",
          },
        ],
      });
    } else {
      setList([...list, newTodo]);
      setInput("");
      setDate("");
      setProgress("Status");
      toast.success(`${newTodo.todo} todo added`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  function deletTodo(id) {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  }

  // function editTodo(id) {
  //   const newList = list.filter((todo) => todo.id !== id);
  //   setList(newList);
  // }
  return (
    <div className="App">
      <h1>Add todo</h1>
      <h2>Try adding Title, Date and Progress to see the result.</h2>
     {/* <Typography variant="h6"  component="div">Title: <TextField id="standard-basic" label="Standard" variant="standard" /></Typography> */}
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
          <option>Status</option>
          <option value="in-progress">in-progress</option>
          <option value="done">done</option>
          <option value="not-started">not-started</option>
        </select>
      </form>
      <p>
        {" "}
        <button onClick={() => addTodo(input)}>Submit</button>
      </p>
      <div>
        <h1>to do list</h1>

        <div className="hight bold">
          <div className="statusTitle"> Status</div>
          <div className="width">Title</div>
          <div className="width">Date</div>
          <div className="width">Action</div>{" "}
        </div>
        {list.map((todo) => {
          return (
            <div key={todo.id} className="hight">
              <div className={todo.progress}></div>
              <div className="width">{todo.todo}</div>
              <div className="width">{todo.date}</div>
              <div className="width">
                {" "}
                {/* #TODO: Edit todo
                <button onClick={()=>editTodo(todo.id)}>Edit</button> */}
                <button
                  onClick={() =>
                    confirmAlert({
                      title: "Confirm to Proceed",
                      message: "Are you sure to remove todo?",
                      buttons: [
                        {
                          label: "Yes",
                          onClick: () => deletTodo(todo.id),
                          color: "#fffccc",
                        },
                        {
                          label: "No",
                        },
                      ],
                    })
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer width hight">
      <div className="not-started footer"></div> <div>= not started</div>
      <div className="in-progress"></div> <div>= in-progress</div>
      <div className="done"></div> <div>= done</div></div>
    </div>
  );
}

export default App;

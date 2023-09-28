import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([""]);
  const [input, setInput] = useState([""]);

  const handleAdd = () => {
    setTasks([...tasks, input]);
    setInput("");
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="mainContainer style">
      <div> My Todo list </div>

      <div className="textContainer">
        <input
          type="text"
          placeholder="add task"
          onChange={handleInput}
          value={input}
        />
        <button onClick={handleAdd}>add</button>
      </div>

      {tasks.map((task, index) => { 
        return <div key={index}>{task}</div>;
      })}
    </div>
  );
};

export default App;

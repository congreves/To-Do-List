import React, { useState } from "react";
import "./index.js";

//components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoForm from './components/ToDoForm';

// styling
import "./App.css";


function App() {
  const [toDoList, setToDoList] = useState([]);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const handleDeleteItem = (id) => {
    let filtered = toDoList.filter((task) => {
    return task.id.toString() !== id;
  });
  setToDoList(filtered);
};


  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy,
      { id: toDoList.length + 1, task: userInput, complete: false }];

   
    setToDoList(copy);
  };

  return (
    <div className="App">
      <Header />
        <ToDoForm addTask={addTask}/>
   
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      handleRemove={handleDeleteItem}
      />
   </div>
  );
}

export default App;

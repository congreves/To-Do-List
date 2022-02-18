import React from "react";
import ToDo from "./ToDo";

import "./css/ToDoList.css";

const ToDoList = ({ toDoList, handleToggle, handleFilter ,handleRemove}) => {
  return (
    <div className="todo-task">
      {toDoList.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id + todo.task}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
            handleRemove={handleRemove}
          />
        );
      
      })}
      <button
        className="btn-clear"
        style={{ margin: "20 px" }}
        onClick={handleFilter}
      >
        Clear finished tasks
      </button>
    </div>
  );
};

export default ToDoList;

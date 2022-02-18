import React from "react";

import "./css/ToDo.css";


const ToDo = ({ todo, handleToggle, handleRemove }) => {
  const handleClick = (e) => {
    handleToggle(e.currentTarget.value);
  };

  const handleDelete = (e) => {
    handleRemove(e.currentTarget.value);
  };

  return (
    <div
      id={todo.id}
      key={todo.id + todo.task}
      name="todo"
      className={todo.complete ? "todo strike" : "todo"}
    >
      {todo.task}
      {todo.completed}
      <div className="buttons">
      <button className="btn-add" onClick={handleClick} value={todo.id}>
        ✔
      </button>
      <button className="btn-delete" onClick={handleDelete} value={todo.id}>
        ❌
      </button>
      </div>
    </div>
  );
};

export default ToDo;

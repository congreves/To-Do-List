import React, { useState } from 'react';

import "./css/ToDoForm.css";

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
        console.log(e);
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");

    }
    return (
        <form className="inputfield" onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button className='btn-submit'>+</button>
        </form>
    );
};

export default ToDoForm;
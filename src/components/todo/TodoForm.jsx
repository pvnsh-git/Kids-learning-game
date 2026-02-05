import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/action/todo";
import TodoTable from "./TodoTable";
import '../../App.css'

const TodoForm = ({dispatch}) => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const inputRef = useRef();

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, [inputRef])
    

    const handleAddTask = (e) => {
        setTasks([...tasks, {task: task, completed: false}])
        dispatch(addTodo(task));
        setTask("");
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }
    const handleEnter = (e) => {
        if (e.keyCode == 13) {
            handleAddTask();
        }
    }

    return (
        <div data-testid='form-wrap'>
            <input
                type="text"
                placeholder="Type Your Task Here"
                data-testid="form-input"
                aria-label="todo-input"
                value={task}
                ref={inputRef}
                className='todo_input'
                onChange={(e) => { setTask(e.target.value) }}
                onKeyDown={handleEnter}
            />
            <button data-testid="add-button" onClick={handleAddTask} className='add_btn'>Add Task</button>
            <TodoTable />
        </div>
    )
}

export default connect()(TodoForm);
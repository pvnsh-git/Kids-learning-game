import React from 'react'
import { connect } from 'react-redux';
import '../../App.css';
import { deleteTodo } from '../../redux/action/todo';

function TodoTable({ tasks, dispatch }) {

    const handleRemoveTask = (index) => {
        dispatch(deleteTodo(index))
    }
    return (
        <div className='todo_table'>
            <h1>Tasks</h1>
            <ul className='table_header'>
                {
                    tasks && tasks.length > 0 && tasks.map((item, index) => {
                        return (
                            <li key={index} className="table_list">
                                <div className='table_content' data-testid='todo-task'>
                                    {item.task}
                                </div>
                                <button className='delete_btn' data-testid='delete-task' onClick={() => handleRemoveTask(index)}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = ({ tasks }) => {
    return {
        tasks
    }
}

export default connect(mapStateToProps)(TodoTable);
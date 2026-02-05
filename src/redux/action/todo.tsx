import { ADD_TASK, DELETE_TODO } from "../constants/todoTypes"

export const addTodo = (task: string) => {
    return (dispatch: Function) => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }
}

export const deleteTodo = (index: number) => {
    return (dispatch: Function, getState: Function) => {
        const state  = getState();
        const tasks = state.tasks;
        const newTasks = tasks.filter((item: object, i: number) => {
            return i !== index;
        })
        dispatch({
            type: DELETE_TODO,
            payload: newTasks
        })
    }
}
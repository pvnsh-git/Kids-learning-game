import { ADD_TASK, DELETE_TODO } from "../constants/todoTypes";

const initialState = {
    tasks: [],
}

export const todo = (state = initialState, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, {task: payload, completed: false}]
            }
            
        case DELETE_TODO:
            return {
                ...state,
                tasks: payload
            }

        default:
            return state;
    }
}
import { LOGIN_SUCCESS } from "../constants/todoTypes"

const initialState = {
    user: {}
}

export const auth = (state=initialState, action: any) => {
    const {type} = action;
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user
            }
    
        default:
            return state;
    }
}